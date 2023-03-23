# Guide for TAG members

## Introduction

Welcome to the TAG! We’re glad you’re joining us. We need your skills and expertise.

This document explains how we work and what you can expect.

## Why we're here

The mission of the TAG is defined by two documents:

* [TAG Charter](https://www.w3.org/2004/10/27-tag-charter.html)
* [World Wide Web Consortium Process Document](http://www.w3.org/Consortium/Process/#TAG)

Both documents define the mission of the TAG as follows:
1. to document and build consensus around principles of Web architecture and to interpret and clarify these principles when necessary;
2. to resolve issues involving general Web architecture brought to the TAG;
3. to help coordinate cross-technology architecture developments inside and outside W3C.

To achieve that, the TAG produce several kinds of work, as outlined below:

* [Design reviews](#design-reviews) are mainly addressing points 2 and 3. 
* [Findings](#findings) and [Guides](#guides-and-other-documents) are helpful for specifications authors and are addressing point 1 and 2. 
* [Blog posts, notes and other publications](#blog-posts-notes-and-other-publications) are more diverse and can apply to everything.


As the TAG have an overview of all the technologies produced at W3C, through its design reviews(#design-reviews), it is in a perfect position to identify possible mismatches and deeper architectural issues. 
The TAG is also reviewing specifications coming from other organisations, like IETF, TC39 or WhatWG when requested.


## What we produce 

### Design reviews

Most of our work is helping and providing feedback to people creating new features and APIs for the web platform. 
They are spec authors. 

We like to see these ideas an an early stage (while they’re being designed). 
Spec authors who want our help open issues in our design review repo on GitHub, and we review them to provide feedback.

We ask spec authors to create an [explainer](https://w3ctag.github.io/explainers), to help us understand what they want to accomplish and what other solutions they have considered. 

We tend to look for issues like:

* How the feature might be made more effective
* How this feature would join up with other work, and who else the spec author should talk to
* Whether we see pitfalls that we’ve experienced before, and can provide advice to help the spec author avoid them
* Whether any of our guides or documents might help them

#### Lifecycle of a Design Review

Design reviews are generally requested by spec authors, spec editors or group chairs.  The goal of a design review is to provide useful review feedback that aids the deisgn of the spec in question and to close the review issue once that feedback has been received and ideally acted upon.  Requestors fill in one fo the templates (early design review, design review, or dispute resolution). These are initially marked as untriaged.  TAG will triage these untriaged issues at least once a week during the regular plenary calls.  Requestors will also be asked to create an explainer, fill in answers to the privacy & security questionnaire, and indicate that they have read the Design Principles document.  The triage process involves assigning ideally 2+ people to work on the issue going forward, assigning labels as appropriate and assigning a **milestone**. In the design review repo we use milestones to indicate which week in the future we will discuss (and ideally try to resolve) this issue.  Once assigned to a milestone (week), that issue will become part of the agenda for that week and will be assigned to a breakout based on who is assigned to the issue.  During the breakout call, the issue will be discussed and progressed towards resolution.  TAG members will write feedback on the issue and review comments and feedback that have been left on the issue, leave feedback on the issues for the spec in question, etc... We will look for signals that the feedback has been received and understood and ideally acted upon.  When the members of a breakout group decide the issue can be closed, the issue is marked as "propose closed" (with a label).  We will then review during the read-outs section of the plenary call for that week and take a decision to close and what resolution label to mark it with (e.g. resolution: satisfied).  One of the owners of the issue will generally write a closing comment and close the issue.  During this process it may sometimes be necessary to have more detailed discussions with the requestors of the review - e.g. by inviting them to a breakout.  

#### Fast Track

Optionally, when a design review comes in, a TAG member may mark it as 
[Fast track?](https://github.com/w3ctag/design-reviews/issues?q=is%3Aissue+label%3A%22Fast+track%3F%22+) and alert other TAG members. Fast track reviews are reviews
 that would be proposed to not take up call time. It’s up to the TAG member
proposing fast track status to indicate what outcome they think the
review should have and why it should be fast tracked. E.g. “This doesn’t need a review. It’s a small
change to a spec we’ve already reviewed with no architectural issues.
Suggested outcome: Resolution: Satisfied”. They should also add
themselves to the issue and add a “Fast track?” label. If it gets at least 
2 indications of support (e.g. thumbs up on Slack) (over 1 week from the
time it has been proposed) from any other TAG members then it can be
closed. It’s up to whoever proposed this for fast track to close it and to
write a brief closing note into the issue, summarizing the reason it can be 
closed, and label it appropriately. If other TAG members object over the 2
day period, then it goes into the regular review cycle

### Findings

When we want to make a statement on a particular topical issue, or a trend that we see, we produce a finding. 
Usually a TAG member proposes a new finding, and if the group agrees, one or more members are the editors and they managing the drafting with the entire TAG.

We keep a [list of findings](https://w3ctag.org/findings/) on our website.

### Guides and other documents

When we decide that it would be helpful for spec authors or implementors to have additional information on something tricky, we write a guide. 
These often come from trends we identify through our design reviews. 

Examples include our [Promises Guide](https://www.w3.org/2001/tag/doc/promises-guide).


### Blog posts, notes and other publications

We have these additional methods of publishing our work, which we use from time to time. 
We occasionally describe findings in plain language with a blog post, like [this one introducing our finding on AMP and distributed/syndicated content](https://www.w3.org/blog/TAG/2017/07/27/distributed-and-syndicated-content-whats-wrong-with-this-picture/), and we have created W3C notes especially in collaboration with working groups, like the [Security and Privacy Questionnaire](https://www.w3.org/TR/security-privacy-questionnaire/).


## How we work

### Working with the web community

Most of our interaction with the web community happens on Github, either in our repos or in the repos of features we are helping.

Each of us also engages directly with the community by tweeting, blogging, and giving talks about our work. 

We work in the open. 
All of our meetings are minuted, and [the minutes are publicly available](https://github.com/w3ctag/meetings). 
We also try to provide links to relevant meeting minutes in our Github issues, so that the spec authors and other community members can find our discussions. 

### Weekly participation

We have three kinds of weeks: design-review weeks (three out of every four weeks) and bigger picture weeks (one out of every four weeks). 
We also have face-to-face weeks, which interrupt the cycle — and are in the next section. 

#### A Design-Review Week

(This starts at the end of the plenary for previous week, when we triage.)

##### 1. Chairs generate agenda, based on various signals

This is one document that covers all our meetings.

The chairs also create the document for our minutes.  
This is normally in a collaborative WYSIWYG tool like Cryptpad. 
The minutes document is also one document for the entire week.

##### 2. Each TAG member attends 2 breakouts, 1 hour each.

These breakouts are minuted in the minutes document for the week.

* Breakout A - webRTC video meeting (`5pm Mon UTC`) - for **US** and **Europe**-based TAG members
* Breakout B - webRTC video meeting (`11pm Monday UTC`) - for **Asia/Pacific** and **US**-based TAG members
* Breakout C - webRTC video meeting (`8am Tuesday UTC`) - for **Asia/Pacific** and **Europe**-based TAG members

Breakout attendees publish a new version of the breakout minutes on Github after each breakout, and link to the published minutes from each issue which was under discussion.

##### 3. Plenary webRTC video meeting (`9pm Wednesday UTC`) - for all TAG members

To share readouts of each breakout, identify further discussion or reach consensus and finish/close the issue.

This also includes triage of new issues, so that the chairs know who to assign to breakouts.

On the third week in the cycle, we need to triage just the bigger-picture issues for the next week's meeting.

##### 4. Work on our own

Each of us should allocate some time (at least three hours beyond the meeting time) for:

* Catching up on our slack channels
* Engaging with the community to help them understand how to work with us or to encourage good work
* Sharing what up to (tweeting, speaking)
* Keeping up with our github repos — looking for new issues, big discussions that blow up
* Participating in our own issues and discussions on Github.

#### A bigger-picture week

(This starts at the end of the plenary for previous week, when we triage.)

##### 1. Chairs generate agenda, based on various signals

This is one document that covers all our meetings.

The chairs also create the document for our minutes.  
This is normally in a collaborative WYSIWYG tool like Cryptpad. 
The minutes document is also one document for the entire week.

##### 2. Each TAG member attends 2 breakouts, 1 hour each.

These breakouts are minuted in the minutes document for the week.

* Breakout A - webRTC video meeting (`5pm Mon UTC`) - for **US** and **Europe**-based TAG members
* Breakout B - webRTC video meeting (`11pm Monday UTC`) - for **Asia/Pacific** and **US**-based TAG members
* Breakout C - webRTC video meeting (`8am Tuesday UTC`) - for **Asia/Pacific** and **Europe**-based TAG members

Breakout attendees publish a new version of the breakout minutes on Github after each breakout, and link to the published minutes from each issue which was under discussion.

##### 3. Plenary webRTC video meeting (`9pm Wednesday UTC`) - for all TAG members

To share readouts of each breakout, identify further discussion or reach consensus and finish/close the issue.

This also includes triage of new issues, so that the chairs know who to assign to breakouts.

This also includes triage of new issues (particularly design review issues for the next week), so that the chairs know who to assign to breakouts.

##### 4. Work on our own

Each of us should allocate some time (at least three hours beyond the meeting time) for:

* Catching up on our slack channels
* Engaging with the community to help them understand how to work with us or to encourage good work
* Sharing what up to (tweeting, speaking)
* Keeping up with our github repos — looking for new issues, big discussions that blow up
* Participating in our own issues and discussions on Github
* Publishing any documents or blog posts
* Writing automation bots and/or other housekeeping

### Face-to-face (F2F) meetings

Every quarter, we meet face-to-face for three days to work together. 
We create the agenda for that time at the beginning of the meeting.

We try to alternate continents, to even out the travel for TAG members.

We often host events with the local web community, either in one of the evenings or in the day before or after our meeting.

### Participating in TPAC

We all attend [W3C TPAC](https://www.w3.org/2019/09/TPAC/), so that we directly spend time with working groups and interest groups, to learn what they are up to and to provide more immediate feedback and support.

We normally have brief TAG meetings, usually at the beginning and the end of the week, so that we can coordinate what we will attend and try to cover as many groups as possible. 

## Access to systems

New TAG members need access to a bunch of systems:

* we communicate on Slack; ask any existing TAG member to invite you.
* we also have a Riot instance, though we don't use it as much.  Ask Peter (?) to invite you.
* we keep two versions of the TAG meeting calendar:
  * there's a calendar on Peter's server.  Ask Peter for access credentials.  There's also a [readonly ICS link](https://cal.w3ctag.org/public.php/tag/calendar.ics).
  * in Google Calendar you can add the w3ctag (use that email address at gmail) calendar; ask Dan if you want write access; there's an [readonly ICS link](https://calendar.google.com/calendar/ical/w3ctag%40gmail.com/public/basic.ics) too
* in your [w3c account](https://www.w3.org/Systems/db/memUser) go to "Connected accounts", make sure your github account is linked
* Get yourself invited to the [w3ctag](https://github.com/w3ctag) github organization, and accept the invite.  You can [make your membership public](https://github.com/orgs/w3ctag/people) if you want.  Then get yourself added to https://github.com/orgs/w3ctag/teams/tag .  Any current TAG member should be able to do this.
* Get yourself invited to the [w3c](https://github.com/w3c) GitHub organization, and accept the invite.  You can [make your membership public](https://github.com/orgs/w3c/people) if you want.  This (plus the account linking above) should mean you're automatically added to https://github.com/orgs/w3c/teams/w3c-group-100-members/members .  The invite should be doable by any W3C staff.
* Ask Dan for tweetdeck access to the [TAG twitter account](https://twitter.com/w3ctag) if you want
