/**
 * @alias B-CTRL
 */
export const BOTTOM_CONTROLLER = {
  COLLAPSED: {
    height: 15
  },
  EXPANDED: {
    height: 50
  },
  get BOOKMARK() {
    return {
      height: this.COLLAPSED.height + 10
    }
  },
  get CONTROLLER() {
    return {
      height: this.EXPANDED.height - this.COLLAPSED.height
    }
  }
}