import { gql } from '@apollo/client';

export const GET_CONFIGURATION = gql`
    query TopBarNotificationConfig {
        getTopBarNotificationConfig {
            enabled
            is_text
            content
            font_size
            background_color
            text_color
            include_urls
            exclude_urls
        }
    }
`;

export default {
    getConfigurationQuery: GET_CONFIGURATION
};
