import React from 'react'
import { searchLargeStories } from 'ui/shared/storybook'
import Pagination from '../Pagination'

// Example prop values
const props = {
  label: '11 - 20 of 300',
  previousUrl: 'prev',
  nextUrl: 'next',
}

searchLargeStories('TDD', module)
  .add('no label', () => <Pagination />)
  .add('label only', () => <Pagination label={props.label} />)
  .add('previousUrl only', () => <Pagination label={props.label} previousUrl={props.previousUrl} />)
  .add('nextUrl only', () => <Pagination label={props.label} nextUrl={props.nextUrl} />)
  .add('nextUrl and previousUrl', () => <Pagination {...props} />)
