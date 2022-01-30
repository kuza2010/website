---
title: Quartz-scheduler in Spring 
description: Integrate quartz scheduler in Spring application 
img: quartz/quartz-scheduler-main.webp 
alt: quartz-scheduler in spring 
languageTags: [spring, java, scheduler]
created: 2022-01-29T16:27:00 
lastModified: 2022-01-30T17:30:00
---

In this article we will integrate [quartz-scheduler](http://www.quartz-scheduler.org/) in Spring Boot application. Our
main goal here is to make quartz-scheduler and MySQL database friends. Also, we will create simple Rest API to
demonstrate the result.

Peripheral code deliberately hidden, we will concentrate on main things. You can fine the whole project in my
[repository](https://github.com/kuza2010/spring-with-quartz).

## Theory

Quartz-scheduler allows you to create scheduled tasks, that will be executed in exact time in the future. We can create
recurring or one-time tasks. In this article we will focus on the main quartz components:
*Job, JobDetail, Trigger and Scheduler*

1) **Job** - interface which should be implemented by a class to perform an action, i.e. job.
2) **Trigger** - it is a mechanism by which jobs are scheduled.
3) **Scheduler** - this is the main interface of a quartz-scheduler. The entry point for working with a scheduler.

## Set up MySql database

If you have running MySql instance on your machine, feel free to skip this section. If you don't - let's run MySql
container. Navigate to `/container/docker` folder and execute:

```shell
docker-compose up
```

Docker will download mysql image, instantiate a container and execute `init.sql` script. After that you can connect to
your database using root user.

Other initialization scripts for databases can be
found [here](https://github.com/quartz-scheduler/quartz/tree/master/quartz-core/src/main/resources/org/quartz/impl/jdbcjobstore)
.

## Add dependencies

To connect quartz just put the following line in your build file.

```
implementation("org.springframework.boot:spring-boot-starter-quartz")
```

Since in this article we want that scheduler lives inside a database, add MySQL connector as a dependency.

```
implementation ("mysql:mysql-connector-java:8.0.25")
```

## Configure quartz-scheduler

1) In our case we won't use quartz as a cluster, but you can easily change properties. We need to set up data source for
   our scheduler and
   configure [JDBC job store](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/configuration/ConfigJobStoreTX.html)
   .

Note, that when we work with quartz in Spring application all quartz properties should start
with: **`spring.quartz.properties.`** prefix

```properties[application.properties]
# not clustered
spring.quartz.properties.org.quartz.jobStore.isClustered=false

# store jobs and triggers in a database via JDBC
spring.quartz.properties.org.quartz.jobStore.class=org.quartz.impl.jdbcjobstore.JobStoreTX
spring.quartz.properties.org.quartz.jobStore.driverDelegateClass=org.quartz.impl.jdbcjobstore.StdJDBCDelegate

# configure Quartz data source
spring.quartz.properties.org.quartz.jobStore.dataSource=quartz

# change it for your env
spring.quartz.properties.org.quartz.dataSource.quartz.URL=jdbc:mysql://localhost:3306/quartz
```

All possible properties available
here: [Quartz configuration](https://www.quartz-scheduler.org/documentation/2.3.1-SNAPSHOT/configuration.html#)

2) After that let's configure `SchedulerFactory` bean that creates and configure Quartz for our application. I don't
   place code here, because it quite many lines of code, so please,
   check [QuartzConfiguration.kt](https://github.com/kuza2010/spring-with-quartz/blob/main/src/main/kotlin/ru/adanil/quartz/config/QuartzConfiguration.kt)
   .

After these steps we are ready to run the application. During startup, you should see some system information about
startup process. Hope it won't be huge error stack trace 👹

## Support @Autowired

Dependency injection is the main building block in Spring. How can we achieve it in Spring - the answer `@Autowired` !
To make our jobs support @Autowired annotation we should create custom implementation of `SpringBeanJobFactory`.

```java[AutoWiringSpringBeanJobFactory.kt]
class AutoWiringSpringBeanJobFactory : SpringBeanJobFactory(), ApplicationContextAware {
    @Transient
    private lateinit var beanFactory: AutowireCapableBeanFactory

    @Throws(BeansException::class)
    override fun setApplicationContext(applicationContext: ApplicationContext) {
        beanFactory = applicationContext.autowireCapableBeanFactory
    }

    @Throws(Exception::class)
    override fun createJobInstance(bundle: TriggerFiredBundle): Any {
        val job = super.createJobInstance(bundle)
        beanFactory.autowireBean(job)
        return job
    }
}
```

Bang! Now we can inject beans into our job 🚀

```java[PrintToConsoleJob.kt]
@Autowired
lateinit var dummyService: DummyService
```

## Create the job

In our simple application, we do not want really to do anything complex. So, lets just create a job that uses injected
service to print user's message to the console.

To implement the job we should implement interface `Job` and override the only method `execute`.

```java[PrintToConsoleJob.kt]
class PrintToConsoleJob : Job {

    // inject service
    @Autowired lateinit var dummyService: DummyService

    override fun execute(context: JobExecutionContext) {
        logger.info { "execute job of class ${PrintToConsoleJob::class.simpleName}" }
        dummyService.doJob(context.jobDetail, context.mergedJobDataMap)
        logger.info { "execute job of class ${PrintToConsoleJob::class.simpleName} finished" }
    }
}
```

## Test it 👨‍🔧

Perform POST request with the following body:

```json[request]
 {
    "text": "This is my super secret message that displayed on: 14:22:00",
    "utcFireTime": "2022-01-30T14:22:00"
}
```

The server response:

```json[response]
{
    "jobName": "Console-job-10d37546-eb84-462e-9be1-e315aa85417f",
    "jobGroup": "Console-job-group"
}
```

Wait the fire time of the task and check log file:
```text[scheduler.log]
17:22:00 INFO: execute job of class PrintToConsoleJob with job key: Console-job-group.Console-job-10d37546-eb84-462e-9be1-e315aa85417f
17:22:00 INFO: *** 'This is my super secret message that displayed on: 14:22:00' ***
17:22:00 INFO: execute job of class PrintToConsoleJob finished
```


This is the minimum working version that can be customized as you prefer.