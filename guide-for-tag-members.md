# Guide for TAG members

## Introduction

Welcome to the TAG! We’re glad you’re joining us. We need your skills and expertise.

This document explains how we work and what you can expect.

## Why we're here

The mission of the TAG is defined by the W3C process:

* [World Wide Web Consortium Process Document](https://www.w3.org/Consortium/Process/#TAG)

This document defines the mission of the TAG as follows:
1. to document and build consensus around principles of Web architecture and to interpret and clarify these principles when necessary;
2. to resolve issues involving general Web architecture brought to the TAG;
3. to help coordinate cross-technology architecture developments inside and outside W3C.

To achieve that, the TAG produce several kinds of work, as outlined below:

* [Design reviews](#design-reviews) are mainly addressing points 2 and 3.
* [Findings](#findings) and [Guides](#guides-and-other-documents) are helpful for specifications authors and are addressing point 1 and 2. 
* [Blog posts, notes and other publications](#blog-posts-notes-and-other-publications) are more diverse and can apply to everything.

As the TAG have an overview of all the technologies produced at W3C, through its design reviews(#design-reviews), it is in a perfect position to identify possible mismatches and deeper architectural issues. 
The TAG is also reviewing specifications coming from other organisations, like IETF, TC39 or WhatWG when requested.

Members of the TAG are part of [W3C Councils](https://www.w3.org/policies/process/#w3c-council) handling [Submission Appeals](https://www.w3.org/policies/process/#SubmissionNo) and [Formal Objections](https://www.w3.org/policies/process/#FormalObjection). See [Councils Guide](https://www.w3.org/guide/council/council.html)

## What we produce 

### Design reviews

We help developers of web features and specifications by providing feedback and reviews.  We have more info on this process [here](https://tag.w3.org/workmode/design-reviews/).

We like to see these ideas an an early stage (while they’re being designed). 
Spec authors who want our help open issues in our design review repo on GitHub.

We ask spec authors to create an [explainer](https://tag.w3.org/explainers/), to help us understand what they want to accomplish and what other solutions they have considered. 

We tend to look for issues like:

* How the feature might be made more effective
* How this feature would join up with other work, and who else the spec author should talk to
* Whether we see pitfalls that we’ve experienced before, and can provide advice to help the spec author avoid them
* Whether any of our guides or documents might help them

#### Lifecycle of a Design Review

Design reviews are generally requested by spec authors, spec editors or group chairs.  The goal of a design review is to provide useful review feedback that aids the deisgn of the spec in question and to close the review issue once that feedback has been received and ideally acted upon.  Requestors fill in one of the templates (early design review, design review, or dispute resolution). These are initially marked as untriaged. TAG will triage these untriaged issues at least once a week during the regular plenary calls.  Requestors will also be asked to create an explainer, fill in answers to the privacy & security questionnaire, and indicate that they have read the Design Principles document.  The triage process involves assigning ideally 2+ people to work on the issue going forward, assigning labels as appropriate and assigning a **milestone**. In the design review repo we use milestones to indicate which week in the future we will discuss (and ideally try to resolve) this issue.  Once assigned to a milestone (week), that issue will become part of the agenda for that week and will be assigned to a breakout based on who is assigned to the issue.  During the breakout call, the issue will be discussed and progressed towards resolution.  TAG members will write feedback on the issue and review comments and feedback that have been left on the issue, leave feedback on the issues for the spec in question, etc... We also have a "private repo" for draft comments that allows us to collaborate asynchronously on more substantive feedback when needed. We will look for signals that the feedback has been received and understood and ideally acted upon.  When the members of a breakout group decide the issue can be closed, the issue is marked as "propose closed" (with a label).  We will then review during the read-outs section of the plenary call for that week and take a decision to close and what resolution label to mark it with (e.g. resolution: satisfied).  One of the owners of the issue will generally write a closing comment and close the issue.  During this process it may sometimes be necessary to have more detailed discussions with the requestors of the review - e.g. by inviting them to a breakout.  

### Findings

When we want to make a statement on a particular topical issue, or a trend that we see, we produce a finding. 
Usually a TAG member proposes a new finding, and if the group agrees, one or more members are the editors and they managing the drafting with the entire TAG.

We keep a [list of findings](https://tag.w3.org/findings/) on our website.

### Guides and other documents

When we decide that it would be helpful for spec authors or implementors to have additional information on something tricky, we write a guide. 
These often come from trends we identify through our design reviews. 

Our core guidlines document is the [Web Platform Design Principles](https://www.w3.org/TR/design-principles).

Some of our guidelines documents may be produced in task forces with other groups or individuals, such as our [Privacy Principles](https://www.w3.org/TR/privacy-principles/).

We havs also recently produced an [Ethical Web Principles](https://www.w3.org/TR/ethical-web-principles) document which provides some high-level guidance and seeks to inform our more actionable guidance. We have also reated W3C notes especially in collaboration with working groups, like the [Security and Privacy Questionnaire](https://www.w3.org/TR/security-privacy-questionnaire/).

### Blog posts

We have these additional methods of publishing our work, which we use from time to time. 
We occasionally describe findings in plain language with a blog post, like [this one explaining the Ethical Web Principles](https://www.w3.org/blog/2024/ethical-web-principles-building-a-better-web/).

## How we work

### Key Technical Topics

As of our December 2024 Face-to-face, we are trying to capture and organize our work into key technical topic areas, which are listed on GitHub [in a project board](https://github.com/orgs/w3ctag/projects/5). This is a work in progress.

### Working with the web community

Most of our interaction with the web community happens on Github, either in our repos or in the repos of features we are helping.

Each of us also engages directly with the community through social media, blogging, and giving talks about our work. 

We work in the open. 
All of our meetings are minuted, and [the minutes are publicly available](https://github.com/w3ctag/meetings). 
We also try to provide links to relevant meeting minutes in our Github issues, so that the spec authors and other community members can find our discussions. 

### Weekly participation

We have three kinds of weeks: design-review weeks (three out of every four weeks) and bigger picture weeks (one out of every four weeks). 
We also have face-to-face weeks, which interrupt the cycle — and are in the next section. 

### Each TAG member attends 2 breakouts 

We currently have 3 breakout sessions each week to accomodate different time zones. These breakouts happen over video call and are organized via the W3C calendar system. TAG members should try to attend 2 out of the 3.

### Plenary meeting - for all TAG members

In plenary calls, we share readouts of each breakout, identify further discussion or reach consensus and finish/close the issue.

We also triage  new issues, so that the chairs know who to assign to breakouts.

All minutes are taken in Markdown in a single CryptPad document for each week and then checked into GitHub by the end of the week.

### Work on our own

Each of us should allocate some time (at least three hours beyond the meeting time) for:

* Catching up on our slack channels
* Engaging with the community to help them understand how to work with us or to encourage good work
* Keeping up with our github repos — looking for new issues, big discussions that blow up
* Participating in our own issues and discussions on Github

### Face-to-face (F2F) meetings

Occationally we will meet face-to-face for three days to work together. 

We create the agenda for that time at the beginning of the meeting.

We try to alternate continents, to even out the travel for TAG members.

We often host events with the local web community, either in one of the evenings or in the day before or after our meeting.

We will make every effort at face-to-face meetings to accomodate remote participation.

### Participating in TPAC

We all tey to attend TPAC, so that we directly spend time with working groups and interest groups, to learn what they are up to and to provide more immediate feedback and support.

We normally have brief TAG meetings, usually at the beginning and the end of the week, so that we can coordinate what we will attend and try to cover as many groups as possible. 

## Access to systems

New TAG members need access to a bunch of systems:

* we communicate on Slack; ask any existing TAG member to invite you.
* we make use of the W3C calendar system
* in your [w3c account](https://www.w3.org/Systems/db/memUser) go to "Connected accounts", make sure your github account is linked
* Get yourself invited to the [w3ctag](https://github.com/w3ctag) github organization, and accept the invite.  You can [make your membership public](https://github.com/orgs/w3ctag/people) if you want.  Then get yourself added to https://github.com/orgs/w3ctag/teams/tag .  Any current TAG member should be able to do this.
* Get yourself invited to the [w3c](https://github.com/w3c) GitHub organization, and accept the invite.  You can [make your membership public](https://github.com/orgs/w3c/people) if you want.  This (plus the account linking above) should mean you're automatically added to https://github.com/orgs/w3c/teams/w3c-group-100-members/members .  The invite should be doable by any W3C staff.
