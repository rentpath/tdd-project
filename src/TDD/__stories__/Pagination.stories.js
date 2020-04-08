import React from 'react';
import Pagination from '../Pagination'
// eslint-disable-next-line no-unused-vars
import styles from './Pagination.stories.css'

export default {
  title: 'Pagination',
  component: Pagination,
}

// Example prop values
const props = {
  label: '11 - 20 of 300',
  previousUrl: 'prev',
  nextUrl: 'next',
}

export const PrevAndNext = () => <Pagination {...props} />
export const PrevOnly = () => <Pagination label={props.label} previousUrl={props.previousUrl} />
export const NextOnly = () => <Pagination label={props.label} nextUrl={props.nextUrl} />
export const LabelOnly = () => <Pagination label={props.label} />
export const NoLabel = () => <Pagination previousUrl={props.previousUrl} />
