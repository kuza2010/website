/**
 * This array will appear on the timelene.
 * To see it navigate to /about page
 *
 * Params:
 *  - text          text to display, i.e. description for the timeline card
 *  - tagText       short tag for describe timeline card
 *  - year          when it was
 *  - key           UNIQUE key
 *  - isAdditional  if true the timeline card was not showed on main timeline card
 *
 */
const myHistory = [
    {
        text: 'Start my journey in Nizhny Novgorod.',
        tagText: 'Life started',
        year: '1997',
        key: '1997',
        isAdditional: false
    },
    {
        text: 'Went to school and meet friends who helps me if I need it.',
        tagText: 'School',
        year: '2004',
        key: '2004',
        isAdditional: false
    },
    {
        text: 'My parents gets first computer. It was Windows XP. I have used PC a lot, but not for programming, just playing.',
        tagText: 'Baby step',
        year: '2005',
        key: '2005',
        isAdditional: false
    },
    {
        text: 'Only in 2007 I have started to use the internet. But I have no idea what was going on, just surfing.',
        tagText: 'Internet',
        year: '2007',
        key: '2007',
        isAdditional: true
    },
    {
        text: 'My parents gave me my first phone - Sony Xperia K550i. With 128 Mb build in memory!!!',
        tagText: 'Phone',
        year: '2008',
        key: '2008',
        isAdditional: true
    },
    {
        text: 'I was well known gamer, CS Source, CS Go and eventually Dota2. I have a local team! Good old days :)',
        tagText: 'Game',
        year: '2012',
        key: '2012',
        isAdditional: true
    },
    {
        text: 'At about high school I have started to learn programming. Nothing interesting, just school-work and simple HTML. At that time I could not realize that it will become my profession.',
        tagText: 'High school',
        year: '2013-2015',
        key: '2013-2015',
        isAdditional: false
    },
    {
        text: 'In summer 2018 some company took a chance and hired me as a C# junior developer. I have worked there for 3 months and left the company at the beginning of spring.  I have recognized, that I dont like C#...',
        tagText: 'First work',
        year: '2018',
        key: '2018',
        isAdditional: true
    },
    {
        text: 'Study at university for Information Technology. I have taken some Java courses and taught myself hard. In 2019 I have graduated with a bachelors degree.',
        tagText: 'University',
        year: '2015-2019',
        key: '2015-2019',
        isAdditional: false
    },
    {
        text: 'Currently I am working and studying at university, it takes a lot of my time and energy. But I am absolutely happy with it. I have tried many different projects and got valuable experience.',
        tagText: 'Work hard',
        year: '2018 - Present',
        key: '2018-present',
        isAdditional: false
    },
    {
        year: '2020',
        text: 'Became interested in the Javascript language and front-end development. Understood that I want to be an full-stack engineer.',
        tagText: 'Java Script',
        key: '2020',
        isAdditional: true
    }
].sort((a, b) => a.year > b.year ? 1 : -1)

export default myHistory
