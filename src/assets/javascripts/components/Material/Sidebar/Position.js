/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

export default class Position {

  /**
   * Set sidebars to locked state and limit height to parent node
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Sidebar
   * @property {HTMLElement} parent_ - Sidebar container
   * @property {HTMLElement} header_ - Header
   * @property {number} height_ - Current sidebar height
   * @property {number} offset_ - Current page y-offset
   * @property {boolean} pad_ - Pad when header is fixed
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLElement)} header - Selector or HTML element
   */
  constructor(el, header) {
    let ref = (typeof el === "string")
      ? document.querySelector(el)
      : el
    if (!(ref instanceof HTMLElement) ||
        !(ref.parentNode instanceof HTMLElement))
      throw new ReferenceError
    this.el_ = ref
    this.parent_ = ref.parentNode

    /* Retrieve header */
    ref = (typeof header === "string")
      ? document.querySelector(header)
      : header
    if (!(ref instanceof HTMLElement))
      throw new ReferenceError
    this.header_ = ref

    /* Initialize current height and test whether header is fixed */
    this.active_ = false;
  }

  /**
   * Initialize sidebar state
   */
  setup() {}

  /**
   * Update locked state and height
   *
   * The inner height of the window (= the visible area) is the maximum
   * possible height for the stretching sidebar. This height must be deducted
   * by the height of the fixed header (56px). Depending on the page y-offset,
   * the top offset of the sidebar must be taken into account, as well as the
   * case where the window is scrolled beyond the sidebar container.
   *
   * @param {Event?} ev - Event
   */
  update(ev) {
    const active = window.pageYOffset >= this.header_.offsetTop
    if (active !== this.active_)
      this.el_.dataset.mdPosition = (this.active_ = active) ? "sticky" : ""
  }

  /**
   * Reset locked state and height
   */
  reset() {
    this.el_.dataset.mdState = ""
    this.active_ = false
  }
}
