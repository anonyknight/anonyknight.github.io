---
title: CS7646-ML4T
summary: CS7646 Machine Learning for Trading - Machine Learning algorithms and its application
last_update:
  date: 'August 27, 2021'
tags: ['OMSCS', 'Machine-Learning', 'Algorithms']
---

## Machine Learning for Trading

[CS7646 ML4T](http://lucylabs.gatech.edu/ml4t/)

### Book References

[machine-learning-for-trading](https://github.com/stefan-jansen/machine-learning-for-trading)

[What Hedge Funds Really Do by Romero and Balch](https://learning.oreilly.com/library/view/what-hedge-funds/9781631570896/)

[Machine Learning, Tom Mitchell](https://www.amazon.com/gp/product/0070428077/ref=as_li_tlie=UTF8&camp=1789&creative=9325&creativeASIN=0070428077&linkCode=as2&tag=teambotsorg&linkId=TMHMI7I43WHC4O3X)


## Random Forest & Q-Learner Strategy Learner

Final project for 3 different types of ML: Decision Trees, reinforcement learning, optimization.

Quantative factors X, dependant variable Y.

### Regression Trees

X1, X2, X3 -> Regression model -> Y

1. Roll back to the beginning of data to get training data.
2. Measure X1, X2, X3 data, not peek forward, only use data until the date.
3. Build the model: Decision Trees, reinforcement learning, optimization.

Drawbacks:

Cannot distinguish between

* Uncertain large return
* Certain small return
* When doing nothing is smart

Don't know when to exit.

### Reinforcement learning.

## Q&A

### What should we consider in manual strategy?

Align the API.

### Is it useful normalizing the indicators?

Decision Tree could have not standardized indicators.

KNN needs to have standardized indicators.

### How to make Dyna run faster?

Use vectorizing code.

### How do we combine indicators, sequentially? Or how do we assign weight or priority in developing a strategy?

* Find threshold for each indicators. Just use the threshold, then voting
* Sequentially one by one (All should be true)
* Assign weight to each one.

Start with 1 indicator first, see if it's better to add more indicators.

## Extra Resources

### **Financial, Investing, and Trading**

- [What Hedge Funds Really Do](https://www.amazon.com/What-Hedge-Funds-Really-Introduction/dp/1631570897) (Book) - Required course book that is a concise source of the financial and investing material used in the course.
- [Investments](https://www.amazon.com/ISE-Investments/dp/1260571157/ref=sr_1_1?crid=1INAHW066TEV0&dchild=1&keywords=investments&qid=1619046413&s=books&sprefix=investments%2Cstripbooks%2C267&sr=1-1) (Book) - A comprehensive book that covers the financial and investing material used in the course.
- [Technical Analysis Explained](https://www.amazon.com/Technical-Analysis-Explained-Fifth-Successful/dp/0071825177/ref=sr_1_3?dchild=1&keywords=technical+analysis+pring&qid=1619046492&s=books&sr=1-3) (Book) - A good book that covers technical analysis. Useful as a reference for understanding indicators and manual trading strategies.
- [Technical Analysis of Financial Markets](https://www.amazon.com/Technical-Analysis-Financial-Markets-Comprehensive/dp/0735200661/ref=sr_1_1?crid=1K3PBUGYFWTR2&dchild=1&keywords=technical+analysis+of+the+financial+markets+john+murphy&qid=1619046568&s=books&sprefix=technical+analysis+of+%2Cstripbooks%2C260&sr=1-1) (Book) - Another good book that covers technical analysis. Useful as a reference for understanding indicators and manual trading strategies.
- [Stockcharts.com](http://stockcharts.com/) (Website) - A free and easy-to-use website that is useful for indicator education, trading strategies, and charting (using a variety of charting techniques).
- [Investopedia.com](http://investopedia.com/) (Website) - A free and easy-to-use website that is useful for indicator education, news, and market simulation.
- [Machine Learning in Finance](https://www.springer.com/gp/book/9783030410674) (Book) 
- [Advances in Financial Machine Learning](https://www.amazon.com/Advances-Financial-Machine-Learning-Marcos/dp/1119482089/ref=sr_1_3?dchild=1&keywords=Marcos+López+de+Prado&qid=1602523085&sr=8-3) (Book)
- [Machine Learning for Asset Managers](https://www.amazon.com/Machine-Learning-Managers-Elements-Quantitative/dp/1108792898/ref=pd_sbs_14_1/136-3286759-6155153?_encoding=UTF8&pd_rd_i=1108792898&pd_rd_r=bca5d62b-2ff7-46a5-88fd-b5aedb643c17&pd_rd_w=khA6N&pd_rd_wg=US0c5&pf_rd_p=b65ee94e-1282-43fc-a8b1-8bf931f6dfab&pf_rd_r=W3AK9JS15VZ2CF6XW7G4&psc=1&refRID=W3AK9JS15VZ2CF6XW7G4) (Book)

### **Machine Learning**

- [Machine Learning](https://www.amazon.com/Machine-Learning-Tom-M-Mitchell/dp/1259096955/ref=sr_1_4?dchild=1&keywords=mitchell+machine+learning&qid=1619046855&s=books&sr=1-4) (Book) - Tom Mitchell's concise introduction to machine learning, including supervised and reinforcement learning. Supplemental reading in CS7646, but required reading in CS7641 (OMSCS ML course)
- [An Introduction to Statistical Learning](https://www.statlearning.com/) (Book) - A very good introductory ML book. Many "suggested" readings shared on Ed Discussions were from this book. (The second edition - hard cover - is expected to be released this summer, with a free PDF available in early 2022.)
- [Elements of Statistical Learning](https://web.stanford.edu/~hastie/ElemStatLearn/) (Book) - A more mathematical and complete introduction to ML. This book may be used in one of the courses in the OMSA program.
- [Foundations of Machine Learning](https://cs.nyu.edu/~mohri/mlbook/) (Book) - Good material, but one of the more theoretical treatments of ML.
- [Probabilistic Machine Learning: An Introduction](https://probml.github.io/pml-book/book1.html) (Book) - The long-anticipated second edition of Kevin Murphy's Machine Learning Book. Will be a two-book series. Book 1 is camera-ready and book 2 will be released as a draft this summer. In some places, Murphy's book is used as an alternative to Tom Mitchell's book.
- [CS7641 Machine Learning](http://omscs.gatech.edu/cs-7641-machine-learning-course-videos) (Georgia Tech OMSCS Course Videos)
- [CMU-601 Machine Learning](https://www.cs.cmu.edu/~ninamf/courses/601sp15/lectures.shtml) (Carnegie Mellon University Course Videos)
- [Introduction to Machine Learning](https://www.youtube.com/playlist?list=PLdAoL1zKcqTW-uzoSVBNEecKHsnug_M0k) (University of Waterloo Course Videos)

### **Reinforcement Learning**

- [Reinforcement Learning: An Introduction](http://www.incompleteideas.net/book/the-book-2nd.html) (Book) - This is currently the definitive RL textbook.
- [Grokking Deep Reinforcement Learning](https://www.oreilly.com/library/view/grokking-deep-reinforcement/9781617295454/) (Book) - Written by Miguel Morales, head TA for Georgia Tech's CS7642 RL Course.
- [Reinforcement Learning](https://deepmind.com/learning-resources/-introduction-reinforcement-learning-david-silver) (David Silver Video Lectures) - Videos and PowerPoint presentations.
- [CS7642 Reinforcement Learning](https://omscs.gatech.edu/cs-7642-reinforcement-learning-course-videos) (Georgia Tech OMSCS Course Videos)
- [CS234 Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rOSOPzutgyCTapiGlY2Nd8u) (Stanford University Course Videos)
- [RL In Finance](http://web.stanford.edu/class/cme241/) (Stanford University - course and book DRAFT)

### **Deep Learning**

- [Deep Learning](https://www.deeplearningbook.org/) (Book) - This is the current leading Deep Learning textbook
- [Deep Learning Revolution](https://www.amazon.com/Deep-Learning-Revolution-MIT-Press/dp/026203803X) (Book) - An easy-to-read book that presents Deep Learning, starting with a historical perspective and stepping forward to today.
- [Deep Learning](https://www.nature.com/articles/nature14539) (Nature Article) - A good article by Hinton and others on deep learning. Access through the Georgia Tech Library.
- [Grokking Deep Learning](https://www.oreilly.com/library/view/grokking-deep-learning/9781617293702/) (Book) - A good book that, like ML4T, will have you implementing algorithms and models.
- [Foundations of Deep Reinforcement Learning](https://www.oreilly.com/library/view/foundations-of-deep/9780135172490/) (Book) - Sections 1.1 through 1.4 provide a nice introduction to reinforcement learning and our work in CS7646.
- [deeplearning.ai](http://deeplearning.ai/) (Website) - A learning & education site by Andrew Ng.


[PORTFOLIO VISUALIZER/efficient frontier](https://www.portfoliovisualizer.com/)