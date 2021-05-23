<template>
  <div>
    <div class="tags" :class="{'tags-show': showMore}">
      <span
        v-for="(item, index) in tags"
        v-show="!item.pages || (item.pages && item.pages.length > 0)"
        :key="index"
        :class="{'active': item.name == currentTag}"
        :style="{ 'backgroundColor': getOneColor() }"
        @click="tagClick(item)">{{item.name}}</span>
    </div>
    <div class="tags_more">
      <button class="tags_more-btn"
              @click="showMore = !showMore">{{ showMore ? '收起' : '展示更多' }}</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, getCurrentInstance, ref } from 'vue-demi'
import { getOneColor } from '@theme/helpers/other'

export default defineComponent({
  props: {
    currentTag: {
      type: String,
      default: ''
    }
  },
  setup (props, ctx) {
    const instance = getCurrentInstance().proxy
    const tags = computed(() => {
      return [{ name: instance.$recoLocales.all, path: '/tag/' }, ...instance.$tagesList]
    })

    const tagClick = tag => {
      ctx.emit('getCurrentTag', tag)
    }

    const showMore = ref(false)

    return { tags, tagClick, getOneColor, showMore }
  }
})
</script>

<style lang="stylus" scoped>
.tags
  max-height 215px
  margin 30px 0
  overflow hidden
  transition 0.3s max-height
  &-show
    max-height max-content
    overflow visible
  span
    vertical-align: middle;
    margin: 4px 4px 10px;
    padding: 4px 8px;
    display: inline-block;
    cursor: pointer;
    border-radius: $borderRadius
    background: #fff;
    color: #fff;
    line-height 13px
    font-size: 13px;
    box-shadow var(--box-shadow)
    transition: all .5s
    &:hover
      transform scale(1.04)
    &.active
      transform scale(1.2)
  &_more
    display flex
    justify-content center
    &-btn 
      color var(--background-color)
      background-color var(--theme-primary)
      cursor pointer
</style>
