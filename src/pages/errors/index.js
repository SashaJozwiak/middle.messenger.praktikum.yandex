import pageError from './errors.hbs'
import { err404, err500 } from './data'

export const page404 = pageError(err404);
export const page500 = pageError(err500);