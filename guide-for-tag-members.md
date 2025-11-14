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

Members of the TAG are part of [W3C Councils](https://www.w3.org/policies/process/#w3c-council) handling [Submission Appeals](https://www.w3.org/policies/process/#SubmissionNo) and [Formal Objections](https://www.w3.org/policies/process/#FormalObjection); see [Councils Guide](https://www.w3.org/guide/council/council.html).

As member of an [elected group](https://www.w3.org/policies/process/#elected-groups), TAG participants are expected to follow a set of [communication guidelines](https://www.w3.org/guide/other/elected-body-communication-guidelines.html).

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

Design reviews are generally requested by spec authors, spec editors or group chairs. They are asking us to provide useful review feedback that aids the design of the spec in question. We then close the review issue once that feedback has been received and ideally acted upon. 

Requestors fill in one of the [templates](https://github.com/w3ctag/design-reviews/tree/main/.github/ISSUE_TEMPLATE) (early design review, design review, or dispute resolution). These are initially marked as untriaged. We will triage these untriaged issues at least once a week during the regular plenary calls. 

The design review templates ask the requestors to give us an [explainer](https://w3ctag.github.io/explainer-explainer/#introduction), fill in answers to the [Security and Privacy Questionnaire](https://www.w3.org/TR/security-privacy-questionnaire/) and indicate that they have read the [Design Principles](https://www.w3.org/TR/design-principles) document. Once we have the information we need, we can decide how to fit this in with the rest of our work (which we call “triage”). 

The triage process involves assigning ideally two or more people to work on the issue. We assign labels to give us simple info about the issue now and in the future, looking especially at:

* the topic or work area
* where it is in our process (with `Progress:` or `Resolution:` labels)
* its priority in our work (we use `Agenda+` to bring something to the top of an agenda). 

We might also decline a request for a number of reasons, including that the design doesn’t impact the architecture of the web or we don’t have the bandwidth to handle it.

TAG chairs prepare agendas for each week, based on the priority we’ve assigned during triage and the weekly meetings that each TAG member/associate attends. We work on these reviews both outside of our calls, asynchronously (using our private brainstorming repository in Github and Slack) — and during the calls themselves. 

Sometimes it takes substantial discussion with the requestors to come to a conclusion. We may keep the discussion in the Github issue, ask a TAG member or associate to speak to them directly, or invite them to join us for a call.

Our feedback represents our experience of similar situations, our understanding of other parts of the web that may be affected, and everything we’ve documented in our findings and guides.

We are careful to say things like “Not speaking as a TAG member”, “In my own opinion” or “This is not TAG consensus” where we are expressing our own opinions in the issue. When we have TAG consensus on how to respond to the request (and consensus may be informal, sometimes just making sure to contact TAG members/associates who we know will have other views), we post it on the issue. 

When the members of a breakout group decide the issue can be closed, the issue is marked with the label `Progress: propose closing`. We review the Propose closing issues during plenary calls to make formal decisions to close the issue (ending the discussion), and to agree an appropriate label for our resolution. 

We try to remain friendly, helpful and thorough throughout the discussion. We don’t have any formal authority, and requesters are always welcome to ignore what we say — so our best way to have an impact is to provide useful, actionable and timely feedback. 

### Findings

When we want to make a statement on a particular topical issue, or a trend that we see, we produce a finding.
Usually a TAG member proposes a new finding, and if the group agrees, one or more members are the editors and they managing the drafting with the entire TAG.

We keep a [list of findings](https://tag.w3.org/findings/) on our website.

### Guides and other documents

When we decide that it would be helpful for spec authors or implementors to have additional information on something tricky, we write a guide.
These often come from trends we identify through our design reviews.

Our core guidelines document is the [Web Platform Design Principles](https://www.w3.org/TR/design-principles).

Some of our guidelines documents may be produced in task forces with other groups or individuals, such as our [Privacy Principles](https://www.w3.org/TR/privacy-principles/).

We have also recently produced an [Ethical Web Principles](https://www.w3.org/TR/ethical-web-principles) document which provides some high-level guidance and seeks to inform our more actionable guidance. We have also related W3C notes especially in collaboration with working groups, like the [Security and Privacy Questionnaire](https://www.w3.org/TR/security-privacy-questionnaire/).

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

We currently have 3 breakout sessions each week to accommodate different time zones. These breakouts happen over video call and are organized via the W3C calendar system. TAG members should try to attend 2 out of the 3.

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

#### Using "AI"

While some of us use "AI" tools to help with our work,
everything we send to another human was written by a human.
We do use machine translation and proofreading tools,
and we do use autocomplete to predict the rest of a word or two,
but we will not generate whole sentences that then have to be checked for accuracy and redundancy.

### Face-to-face (F2F) meetings

Occasionally we will meet face-to-face for three days to work together.

We create the agenda for that time at the beginning of the meeting.

We try to alternate continents, to even out the travel for TAG members.

We often host events with the local web community, either in one of the evenings or in the day before or after our meeting.

We will make every effort at face-to-face meetings to accommodate remote participation.

### Participating in TPAC

We all try to attend TPAC, so that we directly spend time with working groups and interest groups, to learn what they are up to and to provide more immediate feedback and support.

We normally have brief TAG meetings, usually at the beginning and the end of the week, so that we can coordinate what we will attend and try to cover as many groups as possible.

## Access to systems

New TAG members need access to a bunch of systems:

* we communicate on Slack; ask any existing TAG member to invite you.
* we make use of the W3C calendar system
* in your [W3C account](https://www.w3.org/users/myprofile/) go to [Connected accounts](https://www.w3.org/users/myprofile/connectedaccounts/), make sure your github account is linked
* Get yourself invited to the [w3ctag](https://github.com/w3ctag) github organization, and accept the invite.  You can [make your membership public](https://github.com/orgs/w3ctag/people) if you want.  Then get yourself added to https://github.com/orgs/w3ctag/teams/tag .  Any current TAG member should be able to do this.
* Get yourself invited to the [w3c](https://github.com/w3c) GitHub organization, and accept the invite.  You can [make your membership public](https://github.com/orgs/w3c/people) if you want.  This (plus the account linking above) should mean you're automatically added to https://github.com/orgs/w3c/teams/w3c-group-100-members/members .  The invite should be doable by any W3C staff.
