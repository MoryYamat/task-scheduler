# Gantt chart schedule
A personal question:  
__Can scheduling applications address the inefficiencies in software development  
that come with bureaucratic organizational structures?__


## Vision
By combining the `"time schedule method"` and the `"agile development method"` as a `"Gantt chart,"` it may be possible to manage tasks in agile development methods from both a __`macro` (product development management)__ and __`micro` (daily management)__ perspective.

I want to __mathematically establish__ a way to balance the work of an engineer with everyday life.


## Conceptual Design

***Maximizing both Engineering and Life***

### What is Engineering
Constructing a system (solution) to achieve a goal under specific constraints.

### What is constraints (Rare Resources)
* Time (money)
* Manpower
* ~~Material~~
* ~~Physical~~
* ~~Social~~
* ~~Political~~
* ~~Other constraints~~

**This scheduling app focuses on time and people**

### How to maximizing Engineering
The main items managed by this schedule app are **time** and **Manpower**.

* The goal is to **manage tasks** based on **the agile method** as a time management and software development method.
* Human capital management is an afterthought

#### What is the agile method
A design and development method that goes through the cycle of  
**[Design ⇒ Implementation ⇒ Test ⇒ Evaluation ⇒ Deployment ⇒ Analysis ⇒ ...]**  
in a minimum period of 2 to 4 weeks.

* **Advantages**: 
    1. It improves product market relevance. 
    2. It works well with vertically integrated management.
 
From this, we can see that the `attributes` of tasks in agile development can be divided into six categories:   
**"design"**  
**"implementation"**  
**"test"**  
**"evaluation"**  
**"deployment"**  
**"analysis"**

These tasks need to be managed **efficiently**.

### How to manage tasks
The goal of this schedule app is to integrate `MACRO` (project) management and `MICRO` (task) management.

`Macro` management is based on the "agile development method."
`Micro` management is based on the "time schedule method"

These two methods are visualized using a **`Gantt chart`**, allowing for both `micro` and `macro` management.

### In conclusion
The goal is to __maximize `productivity`__ by efficiently scheduling and managing these tasks.

* `productivity` variables
    * Degree of goal achievement (satisfaction)
    * cost (time)

### What is Life
Here, everyday life includes all activities other than work.  
* **EXAMPLES**
    1. sleep
    2. meal
    3. vacation
    4. others...

In this way, tasks that are composed of `attributes` other than work are defined as `"life"` tasks.

### How to maximizing Life
The goal is to __maximize__ the `satisfaction` of each task.

* `satisfaction` variables
    * Degree of goal achievement (satisfaction)
    * cost (time)


### **In conclusion**
* `Macro` management is based on agile development methods.
* `Micro` management is based on the time schedule method.
* Develop a `Gantt chart-based` application as a tool to integrate these management methods.

* Define the smallest unit of activity as a `"task"` and divide each `attribute` into `"project"` and `"life"` perspectives.

* We strive to __maximize__ `satisfaction` in both __engineering__ and __life__.


## Basic Design
* It's the product, not the schedule, that matters most.  
__So Need to be able to manage issues for each project__

### 1. Required screens and functions
* A. Dashboard:  
You can check the progress of projects and tasks at a glance with visual data.  
It also serves as a general menu that allows you to transition to other screens.

* B. Task Management Screen  
Based on the "Time Scheduling Method"
Decide your daily activity "timetable" based on tasks.(MICRO)

* C. Project Management Screen  
Based on "Agile Development Methodology"
Manage tasks on a project basis (MACRO)

* 

### 2. Relationships and transitions between screens
See module_Config.pptx for details.

| Dashboard | --> | Task Management |  
&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;--> | Project Management|  


### 3. Task Attributes
Task attributes can be broadly divided into __"project tasks"__ and __"life tasks"__.

* __"project tasks"__ (Agile Development Methodology)
    * design
    * implementation
    * test
    * evaluation
    * deployment
    * analysis

* __"life tasks"__
    * sleep
    * meal
    * vacation
    * others...

### 4. Formulating satisfaction

#### __Productivity__



#### __Life satisfaction__

### 5. Issue management methods in agile development


## Detailed Design (Functional Design)

#### A. Dashboard


#### B. Task Management Screen



#### C. Project Management Screen



## Design Challenge

* Could we make the scheduling application itself more flexible so it would be more suitable for engineers?

* Is it possible to manage the schedule itself in an agile way? Managing the schedule more adaptively and efficiently is difficult. So how about providing methods and algorithms to help with that?

* How to ensure "goal-orientedness," the key to agile development?

* What is software development productivity?  
__In the case of contract development, it is expressed as a ratio of the cost and time of the project, the development period and customer satisfaction.__  
The same ratio is also used for other types of feature enhancements and improvements.

* 

## Idea (For the future)

* __Is it possible to coordinate scheduling to eliminate idle time?__

* Aim to structure the schedule. For example, a Gantt chart is a tree structure.
* Could it be possible to aggregate various management resources into a few indicators and structure them? About five dimensions.

* Allows you to change the development model to suit your needs

## __Tomorrow and beyond__
* List as many attributes of a task as possible
* Formulate the relationship between the concept of satisfaction and other variables
* List the screens and features you need
* Determine their transitions and relationships
* Considering issue management methods in agile development
* Customable Dashboard and Component windows
* Graph your workload and stay motivated
* Evaluate daily satisfaction. Calculate the optimal function from past data. Changes in this function are also treated as data.

| Updated | Date    |
|:--------|:----|
| (new)   |2024/11/15 |
| (update)|2024/11/17|
| (update)|2024/11/19|
