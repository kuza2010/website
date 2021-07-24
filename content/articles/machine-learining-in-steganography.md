---
title: CNN Steganalaysis 
description: Take a look into machine learning in steganalaysis problem 
img: steganalysis-with-cnn.bmp 
alt: my first blog post 
languageTags: [python, pytorch, steganalaysis]
created: 2021-07-21T21:27:00
---

In this article we are going to build steganography detector based on convolutional neural network
[(CNN)](https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53)
in steganalaysis problem. Our network will be able to classify an input image into two separate categories:

1. Cover image - a 'pure' image
2. Stego image - an image with embedded date

## Introduction to steganography and steganalysis
Steganography in its modern form is a private communication technic between two or more hosts. At the same time the fact
of data exchange is hidden from prying eyes. Seems that the nodes just exchange images, but under the hood the image
with a cute cat can hide the secret message.

Modern steganography techniques allow us to hide the data inside different digital data sources (**containers**):
audio, image, video files. But most common way - using image container.

In parallel with the development of new steganography techniques the opposite direction has been developed.
The opposite to steganography is steganalysis - it allows us to determine the fact of using steganography.

<p class="text-right">
    <a href="https://en.wikipedia.org/wiki/Steganography">steganography wiki</a><br/>
    <a href="https://en.wikipedia.org/wiki/Steganalysis">steganalysis wiki</a>
</p>

## Convolutional neural network advantages
Of course for steganalysis purpose we can use more traditional methods like computation of Rich Models (RM),
followed by classification using an Ensemble Classifier (EC). But in 2015 the first CNN for steganalysis
appeared and its result was very close to the RM + EC classifier. Since then CNN has firmly established
themselves in problems of steganalysis.

By mid of 2021 there are few proposed cnn with great classification results: 
* [SRNet](https://ieeexplore.ieee.org/document/8470101) - one of the first works on this topic
* [Yedroudj-Net](https://github.com/yedmed/steganalysis_with_CNN_Yedroudj-Net) - some improvements like: HP-filters, batch normalization etc.
* [Zhu-Net](https://www.researchgate.net/publication/326696542_Efficient_feature_learning_and_multi-size_image_steganalysis_based_on_CNN) - proposed architecture uses Spatial pyramid pooling module to improve classification and other features

## Tools
Well, to learn our CNN we need some basic knowledge in machine learning and programming. I propose to use
the following tools:
1. [PyTorch](https://pytorch.org/) as a machine learning framework
2. [Google colaboratory](https://colab.research.google.com/?utm_source=scs-index) as a platform for learning neural network
3. [BossBase v.1.01](http://dde.binghamton.edu/download/ImageDB/BOSSbase_1.01.zip) as a data set for learning neural network

## Proposed architecture

## Data preparation

