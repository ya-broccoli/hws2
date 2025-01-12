import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Remove from '@mui/icons-material/Remove';

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // if (sort === '') {
    //     return down
    // } else if (sort === down) {
    //     return up
    // } else {
    //     return ''
    // }
    return sort === down ? up : sort === up ? '' : down;
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        console.log('Current sort:', sort); // Текущее значение сортировки
        console.log('New sort value:', pureChange(sort, down, up)); // Новое значение
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? <KeyboardArrowDownIcon/>
        : sort === up
            ? <KeyboardArrowUpIcon/>
            : <Remove/>;

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {icon}
        </span>
    )
}

export default SuperSort
