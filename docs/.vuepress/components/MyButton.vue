<template>
  <button type="button" :class="[`_btn-${type}`, {'_btn-disable': disabled }]" @click="handleClick">
    <i class="material-icons icon" v-if="icon && !right">{{ icon }}</i>
    <span class="_btn-content">
      <slot>default</slot>
    </span>
    <i class="material-icons icon" v-if="icon && right">{{ icon }}</i>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    right: {
      type: Boolean
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss" scoped>

@import '../styles/theme.scss';
// 按钮相关 start class about button
@mixin _btn-color($bg, $color) {
  background-color: $bg;
  color: $color;
}

@mixin _btn-disable-color($bg, $color) {
  background-color: $bg;
  color: $color;
}

@mixin _btn-active-color($bg) {
  background-color: $bg;
}

@mixin _btn-hover($bg) {
  background-color: $bg;
}

%_btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 64px;
  height: 40px;
  border: 0;
  border-radius: 5px;
  outline: none;
  white-space: nowrap;
  user-select: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.25s;
}

.icon {
  padding-left: 8px;

  & + ._btn-content {
    padding-left: 8px;
  }
}

._btn-content {
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  line-height: 100%;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  vertical-align: middle;

  & + .icon {
    // margin-left: -8px;
    padding-right: 8px;
    padding-left: 0;
  }
}

._btn-default {
  @extend %_btn;
  @include _btn-color(#5d5d5d, #fff);
}

._btn-dark-light {
  @extend %_btn;
  @include _btn-color(#818181, #fff);

  &:hover {
    @include _btn-hover(#909090);
  }

  &:active {
    @include _btn-active-color(#777);
  }
}

._btn-light {
  @extend %_btn;
  @include _btn-color(#fff, #666);

  &:hover {
    @include _btn-hover(#f7f7f7);
  }

  &:active {
    @include _btn-active-color(#e7e7e7);
  }

  ._btn-content {
    padding: 0 8px;
  }
}

._btn-light-dark {
  @extend %_btn;
  @include _btn-color(#fff, #222);

  &:hover {
    @include _btn-hover(#f7f7f7);
  }

  &:active {
    @include _btn-active-color(#e7e7e7);
  }

  ._btn-content {
    padding: 0 8px;
  }
}

._btn-primary {
  @extend %_btn;
  @include _btn-color($active, #fff);

  &:hover {
    @include _btn-hover($active);
  }

  &:active {
    @include _btn-active-color($hover-active);
  }

  &._btn-disable {
    @extend %_btn;
    @include _btn-color(#f7f7f7, #aeaeae);
    pointer-events: none;
  }
}

._btn-color-primary {
  @extend %_btn;
  @include _btn-color(#fff, $active);

  &:hover {
    @include _btn-hover($active-bg);
  }

  &:active {
    @include _btn-active-color($active-bg);
  }

  ._btn-content {
    padding: 0 8px;
  }
}

._btn-error {
  @extend %_btn;
  @include _btn-color($danger, #fff);

  &:hover {
    @include _btn-hover(#f54c43);
  }

  &:active {
    @include _btn-active-color(#ce100d);
  }
}

._btn-gray-primary {
  @extend %_btn;
  @include _btn-color(#f7f7f7, $active);
  &:active {
    @include _btn-active-color(#e7e7e7);
  }
}

._btn-color-error {
  @extend %_btn;
  @include _btn-color(#fff, var(--main-error-color));
  &:hover {
    @include _btn-hover(#f7f7f7);
  }

  &:active {
    @include _btn-active-color(#e7e7e7);
  }

  ._btn-content {
    padding: 0 8px;
  }
}

._btn-disable {
  @extend %_btn;
  @include _btn-color(#fff, #aeaeae);
  pointer-events: none;
  ._btn-content {
    padding: 0 8px;
  }
}

._btn-color-disable {
  @extend %_btn;
  @include _btn-color(#f7f7f7, #aeaeae);
  pointer-events: none;
}
</style>
