<template>
  <div class="my-textarea">
    <textarea
      :name="name"
      class="textarea"
      :value="value"
      @input="handleVal"
      required
    ></textarea>
    <label for="textarea" class="label">description</label>
    <!-- <span v-if="errors.has(name)" class="info error">{{ errors.first(name) }}</span>
    <span class="info" v-else>{{ info }}</span> -->
  </div>
</template>
<script>
export default {
//   inject: ['$validator'],
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    name: String,
    rules: {
      type: String,
      default: 'required'
    },
    info: {
      type: String
    }
  },
  methods: {
    handleVal(e) {
      this.$emit('input', e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/theme.scss';
@import '../styles/_mixin.scss';

.my-textarea {
  position: relative;
}

%active_label {
  top: -8px;
  left: 12px;
  font-size: 12px;
  height: 16px;
  font-weight: 500;
}

.textarea {
  box-sizing: border-box;
  width: 100%;
  height: 96px;
  padding: 10px 16px;
  border: 1px solid #aeaeae;
  border-radius: 5px;
  font-size: 16px;
  color: #666;
  resize: none;
  transition: border-color 0.25s;

  @include _scroll-bar;

  &:focus {
    border-color: $active;

    & + .label {
      @extend %active_label;
      color: $active;
    }
  }

  &:valid {
    & + .label {
      @extend %active_label;
    }
  }
}

.label {
  position: absolute;
  box-sizing: border-box;
  top: 10px;
  left: 16px;
  pointer-events: none;
  color: #666;
  background-color: #fff;
  padding: 2px 4.85px;
  transition: top 0.25s, font-size 0.25s, left 0.25s;
  text-transform: capitalize;
}

.info {
  color: #aeaeae;
  font-size: 12px;
  line-height: 14px;
  margin-top: 2px;
  margin-left: 16px;
  position: absolute;
  display: block;
}

.error {
  border-color: $danger !important;
  color: $danger !important;
}
</style>
