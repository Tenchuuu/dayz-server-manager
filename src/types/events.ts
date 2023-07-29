/* istanbul ignore file */

// eslint-disable-next-line no-shadow
export enum InternalEventTypes {
    INTERFACE_REQUEST = 'INTERFACE_REQUEST',
    INTERFACE_COMMANDS = 'INTERFACE_COMMANDS',

    DISCORD_MESSAGE = 'DISCORD_MESSAGE',

    MONITOR_STATE_CHANGE = 'MONITOR_STATE_CHANGE',

    LOG_ENTRY = 'LOG_ENTRY',
    METRIC_ENTRY = 'METRIC_ENTRY',
}
