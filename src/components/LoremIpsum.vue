<template>
  <p>
    {{ text }}
  </p>
</template>

<script>
export default {
  name: 'lorem-ipsum',
  props: {
    paragraphs: {
      type: [String, Number],
      default: 20
    }
  },
  data() {
    return {
      text: 'Loading ...'
    }
  },
  computed: {
    url() {
      return `https://baconipsum.com/api/?type=meat-and-filler&paras=${this.paragraphs}&format=text`
    }
  },
  created() {
    fetch(this.url)
      .then(response => response.text())
      .then(text => (this.text = text))
      .catch(error => {
        console.error(error)
        this.text = 'Error: ' + error.message
      })
  }
}
</script>
