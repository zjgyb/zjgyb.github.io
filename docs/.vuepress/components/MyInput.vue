<template>
  <div class="my-textfield">
    <input
      :type="type"
      :name="name"
      :class="[`text-${size}`]"
      :value="value"
      @input="handleVal"
      :disabled="disabled ? 'disabled': false"
      v-if="immediate"
      autocomplete
      :autofocus="autofocus"
      required
    />
    <input
      :type="type"
      :name="name"
      :class="[`text-${size}`]"
      :value="value"
      @input="handleVal"
      :disabled="disabled ? 'disabled': false"
      v-else
      autocomplete
      :autofocus="autofocus"
      required
    />
    <label
      v-if="label"
      for="text"
      :class="[`label-${size}`]"
    >{{ labelVal }}</label>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    name: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'text'
    },
    rules: {
      type: String,
      default: 'required'
    },
    info: {
      type: String
    },
    immediate: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      abc: true
    };
  },
  computed: {
    labelVal() {
      const [first, ...rest] = this.label;
      return first.toLocaleUpperCase() + rest.join('');
    }
  },
  methods: {
    handleVal(e) {
      this.$emit('input', e.target.value);
    }
  }
};
</script>

<style lang="less" scoped>
@import '../styles/theme.less';

.my-textfield {
  position: relative;
}

.active_label {
  top: -8px;
  left: 12px;
  font-size: 12px;
  height: 15px;
  line-height: 16px;
  font-weight: 500;
}

.text {
  box-sizing: border-box;
  width: 100%;
  padding: 0 15px;
  border: 1px solid #aeaeae;
  border-radius: 5px;
  font-size: 16px;
  color: #666;
  transition: border-color 0.25s;
  background-color: #fff;

  &:focus {
    border-color: @active;

    & + .label-normal,
    & + .label-small {
      .active_label;
      color: @active;
    }
  }

  &:valid {
    & + .label-normal,
    & + .label-small {
      .active_label;
    }
  }


  &:disabled {
    color: #AAA;
    & + .label-normal,
    & + .label-small {
      .active_label;
    }
  }
}

.text-normal {
  .text;
  height: 51px;
}

.text-small {
  .text;
  height: 48px;
  border-radius: 8px;
}

.label {
  position: absolute;
  box-sizing: border-box;

  left: 16px;
  pointer-events: none;
  color: #666;
  background-color: #fff;
  padding: 0 6.83px;
  transition: top 0.25s, font-size 0.25s, color 0.25s, left 0.25s;
}

.label-normal {
  .label;
  top: 15px;
  height: 19px;
}

.label-small {
  .label;
  top: 13px;
  height: 22px;
}

.info {
  position: absolute;
  color: #aeaeae;
  font-size: 12px;
  line-height: 14px;
  margin-top: 2px;
  margin-left: 16px;
  display: block;
  white-space: nowrap;
}

.error {
  bottom: -15px;
  border-color: @danger !important;
  color: @danger !important;

  &:invalid:not(:empty) {
    & + .label-normal,
    & + .label-small {
      .active_label;
    }
  }
}
</style>
