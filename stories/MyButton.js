import axios from 'axios'

export default {
  name: 'my-button',

  data() {
    return {
      buttonStyles: {
        border: 'none',
        cursor: 'pointer',
        fontSize: '15px',
        textTransform: 'uppercase',
        padding: '3px 10px',
        color: 'white',        
        width: '376px',
        height: '60px',

        // Dynamic import
        background: '',
      },
      styles:'',
      
    };
  },

  template: `
    <button :style="buttonStyles" @click="onClick">
      <slot></slot>
    </button>
  `,

  methods: {
    onClick() {
      this.$emit('click');
    },
  },

  mounted() {
    axios
      .get('https://invision-eventsv7.invisionapp.com/dsm-export/in-vision-events-v-7/shuffle-well/style-data.json?exportFormat=list&key=rJMB3lPMME')
      .then(response => {
        this.styles = response


        // Recreating Color Palette
        var BlushingBlue = response.data.list.colors[0].colors[0].value;
        var BrightPink = response.data.list.colors[0].colors[1].value;
        var PoppingPurple = response.data.list.colors[0].colors[3].value;

        // Create gradient
        var Gradient = `linear-gradient(90deg, ${PoppingPurple}, ${BlushingBlue})`;

        // Assign Styles
        this.buttonStyles.background = Gradient;
        
        
        
        //console.log(response)
      })


  }
  
};
