import React, { useRef, useState } from 'react';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { XCircle } from 'react-feather';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './Notification.css';
import { getConfiguration } from '../../talons/getConfiguration';
import BrowserPersistence from '@magento/peregrine/lib/util/simplePersistence.js';
import checkUrl from './checkUrl';

const storage = new BrowserPersistence();

const Notification = props => {
    const containerEl = useRef(null);
    const [ closed, setClosed ] = useState(null);
    const {
        configuration,
        error,
        loading
    } = getConfiguration();
    if (loading || error || closed || storage.getItem('top_bar_notification_closed')) {
        return null;
    }
    const {
        enabled,
        is_text,
        content,
        font_size,
        background_color,
        text_color,
        include_urls,
        exclude_urls
    } = configuration;
    if (!enabled || !checkUrl(include_urls, exclude_urls)) {
        return null;
    }
    const classes = mergeClasses(defaultClasses, props.classes);

    const containerStyles = {};
    const textStyles = {};
    if (is_text) {
        if (background_color) {
            containerStyles.backgroundColor = background_color;
        }
        if (font_size) {
            textStyles.fontSize = font_size;
        }
        if (text_color) {
            textStyles.color = text_color;
        }
    }

    return (
        <div className={classes.container} ref={containerEl} style={containerStyles}>
            <div dangerouslySetInnerHTML={{ __html: content }} style={textStyles} />
            <div className={classes.close} onClick={() => {
                storage.setItem('top_bar_notification_closed', true);
                setClosed(true);
            }}>
                <Icon
                    classes={{ icon: defaultClasses.icon }}
                    src={XCircle}
                    attrs={{ width: 18 }} />
            </div>
        </div>
    );
};

export default Notification;
