import inner from './inner'
import add from './add'
import sale from './sale'
import saleDetails from './sale-details'
import sort from './sort'
import appraise from './appraise'
import appraiseDetails from './appraise-details'
import recycle from './recycle'

export default {
  inner: inner,
  add: add,
  sale: {
    inner: sale,
    details: saleDetails
  },
  sort: sort,
  appraise: {
    inner: appraise,
    details: appraiseDetails
  },
  recycle: recycle
}
