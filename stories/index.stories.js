/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton';
import Welcome from './Welcome';
import Task from '../src/components/Task';
import axios from 'axios'

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const methods = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};


// Welcom Tab
storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

// Button Tab
storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Next</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));


// Task Tab
storiesOf('Task', module)
.add('default', () => {
  return {
    components: { Task },
    template: `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
    data: () => ({ task }),
    methods,
  };
})
.add('pinned', () => {
  return {
    components: { Task },
    template: `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
    data: () => ({ task: { ...task, state: 'TASK_PINNED' } }),
    methods,
  };
})
.add('archived', () => {
  return {
    components: { Task },
    template: `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
    data: () => ({ task: { ...task, state: 'TASK_ARCHIVED' } }),
    methods,
  };
});

// Task Tab
storiesOf('New', module)
.add('default', () => {
  return {
    components: { Task },
    template: `<task :task="styles" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
    data: () => ({ styles }),
    methods,
    mounted() {
      axios
      .get('https://invision-eventsv7.invisionapp.com/dsm-export/in-vision-events-v-7/shuffle-well/style-data.json?exportFormat=list&key=rJMB3lPMME')
      .then(response => {
        this.styles = response
        console.log(response)
      })
    },
  };
});
  

/* eslint-enable react/react-in-jsx-scope */
