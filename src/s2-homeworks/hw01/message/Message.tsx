import React from 'react'
import s from './Message.module.css'
import {MessageText, UserType} from '../HW1';
import avatar from '../avatar.png'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: {
        id: number
        user: UserType
        message: MessageText
    }
}

// нужно отобразить приходящие данные
const Message = ({message}: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + message.id}
                    src={avatar}
                    alt={'аватар'}
                    width={'40px'}
                    height={'40px'}
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + message.id} className={s.name}>
                        {message.user.name}
                    </div>
                    <pre id={'hw1-text-' + message.id} className={s.messageText}>
                        {message.message.text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + message.id} className={s.time}>
                {message.message.time}
            </div>
        </div>
    )
}

export default Message
