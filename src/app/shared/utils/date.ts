import * as _moment from 'moment';

export function dateToString(value: Date | string): string | null {
    if (!value) { return null; }
    return _moment(value, 'DD-MM-YYYY').format('YYYYMMDD');
}
