<template>
  <input
    type="checkbox"
    name="checkbox"
    class="_switch"
    :disabled="disabled ? 'disabled': false"
    :checked="value"
    @change="isCheck"
  />
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isCheck(e) {
      this.$emit('input', e.target.checked);
    }
  },
};
</script>

<style lang="less" scoped>
@import '../styles/theme.less';

@width: 32px;
@radius: 8px;

._switch {
  position: relative;
  width: @width + 2 * @radius;
  height: 2 * @radius;
  border-radius: @radius;
  background-color: #b7c1b2;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2) inset;
  appearance: none;
  transition: 0.5s;

  &:checked {
    background: @active;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: @radius * 2;
    height: @radius * 2;
    border-radius: 50%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    background-color: #fff;
    transform: scale(2);
    transition: 0.5s;
  }

  &:checked:before {
    left: @width;
  }
}
</style>
