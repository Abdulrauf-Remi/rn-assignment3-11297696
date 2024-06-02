# DCIT202 Mobile Application Development Assignment 3

## Overview

This project is a mobile application developed using React Native and Expo. It recreates a given UI design and includes various core components such as `View`, `Text`, `ScrollView`, `TextInput`, `FlatList`, `Image`, and `SafeAreaView`.

## Components Description

### App.js
The main entry point of the application. It sets up the overall layout and structure of the app, and includes the following sections:

- **Header Section**: Displays a greeting, task count, and a profile image.
- **Search Bar**: Includes a `TextInput` for searching and an icon for filtering.
- **Categories Section**: Displays a horizontal list of categories with images and task counts.
- **Ongoing Task Section**: Displays a vertical list of ongoing tasks.

### Header Section
- **View**: Container for the header elements.
- **Text**: Displays the greeting ("Hello, Devs") and the task count.
- **Image**: Displays the profile icon.

### Search Bar
- **View**: Container for the search bar elements.
- **TextInput**: Input field for searching tasks.
- **Image**: Displays the search and filter icons.

### Categories Section
- **FlatList**: Renders a horizontal list of categories.
- **View**: Container for each category item.
- **Text**: Displays the category name and task count.
- **Image**: Displays the category image.

### Ongoing Task Section
- **FlatList**: Renders a vertical list of ongoing tasks.
- **View**: Container for each task item.
- **Text**: Displays the task name.


