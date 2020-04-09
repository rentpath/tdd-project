import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";

import Pagination from '../Pagination'
// eslint-disable-next-line no-unused-vars
import styles from './Pagination.stories.css'

export default {
  title: 'Pagination',
  component: Pagination,
  decorators: [withKnobs],
}

// Example prop values
const props = {
  label: '11 - 20 of 300 Properties',
  previousUrl: '/search',
  nextUrl: '/search?page=3',
}

// Interactive storybook - use knobs to change values
export const WithKnobs = () => (
  <Pagination
    label={text('label', props.label)}
    previousUrl={text('previousUrl', props.previousUrl)}
    nextUrl={text('nextUrl', props.nextUrl)}
  />
)

// Various combinations of props
export const PrevAndNext = () => <Pagination {...props} />
export const PrevOnly = () => <Pagination label={props.label} previousUrl={props.previousUrl} />
export const NextOnly = () => <Pagination label={props.label} nextUrl={props.nextUrl} />
export const LabelOnly = () => <Pagination label={props.label} />
export const NoLabel = () => <Pagination previousUrl={props.previousUrl} />
