/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdCommonModule, MdRippleModule} from '@angular/material/core';
import {A11yModule} from '@angular/cdk/a11y';
import {
  MdAnchor,
  MdButton,
  MdMiniFab,
  MdButtonCssMatStyler,
  MdFab,
  MdIconButtonCssMatStyler,
  MdRaisedButtonCssMatStyler
} from './button';


@NgModule({
  imports: [
    CommonModule,
    MdRippleModule,
    MdCommonModule,
    A11yModule,
  ],
  exports: [
    MdButton,
    MdAnchor,
    MdMiniFab,
    MdFab,
    MdCommonModule,
    MdButtonCssMatStyler,
    MdRaisedButtonCssMatStyler,
    MdIconButtonCssMatStyler,
  ],
  declarations: [
    MdButton,
    MdAnchor,
    MdMiniFab,
    MdFab,
    MdButtonCssMatStyler,
    MdRaisedButtonCssMatStyler,
    MdIconButtonCssMatStyler,
  ],
})
export class MdButtonModule {}
