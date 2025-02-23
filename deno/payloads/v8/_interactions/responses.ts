import type { APIApplicationCommandOptionChoice } from './applicationCommands.ts';
import type { RESTPostAPIWebhookWithTokenJSONBody } from '../../../v8.ts';
import type { APIActionRowComponent, APIModalActionRowComponent } from '../channel.ts';
import type { MessageFlags } from '../mod.ts';

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export enum InteractionType {
	Ping = 1,
	ApplicationCommand,
	MessageComponent,
	ApplicationCommandAutocomplete,
	ModalSubmit,
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIInteractionResponse =
	| APIInteractionResponsePong
	| APIInteractionResponseChannelMessageWithSource
	| APIInteractionResponseDeferredChannelMessageWithSource
	| APIInteractionResponseDeferredMessageUpdate
	| APIInteractionResponseUpdateMessage
	| APIApplicationCommandAutocompleteResponse
	| APIModalInteractionResponse;

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIInteractionResponsePong {
	type: InteractionResponseType.Pong;
}

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIApplicationCommandAutocompleteResponse {
	type: InteractionResponseType.ApplicationCommandAutocompleteResult;
	data: APICommandAutocompleteInteractionResponseCallbackData;
}

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIModalInteractionResponse {
	type: InteractionResponseType.Modal;
	data: APIModalInteractionResponseCallbackData;
}

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIInteractionResponseChannelMessageWithSource {
	type: InteractionResponseType.ChannelMessageWithSource;
	data: APIInteractionResponseCallbackData;
}

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIInteractionResponseDeferredChannelMessageWithSource {
	type: InteractionResponseType.DeferredChannelMessageWithSource;
	data?: Pick<APIInteractionResponseCallbackData, 'flags'>;
}

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIInteractionResponseDeferredMessageUpdate {
	type: InteractionResponseType.DeferredMessageUpdate;
}

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIInteractionResponseUpdateMessage {
	type: InteractionResponseType.UpdateMessage;
	data?: APIInteractionResponseCallbackData;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export enum InteractionResponseType {
	/**
	 * ACK a `Ping`
	 */
	Pong = 1,
	/**
	 * Respond to an interaction with a message
	 */
	ChannelMessageWithSource = 4,
	/**
	 * ACK an interaction and edit to a response later, the user sees a loading state
	 */
	DeferredChannelMessageWithSource,
	/**
	 * ACK a button interaction and update it to a loading state
	 */
	DeferredMessageUpdate,
	/**
	 * ACK a button interaction and edit the message to which the button was attached
	 */
	UpdateMessage,
	/**
	 * For autocomplete interactions
	 */
	ApplicationCommandAutocompleteResult,
	/**
	 * Respond to an interaction with an modal for a user to fill-out
	 */
	Modal,
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-data-structure
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export type APIInteractionResponseCallbackData = Omit<
	RESTPostAPIWebhookWithTokenJSONBody,
	'username' | 'avatar_url'
> & { flags?: MessageFlags };

/**
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APICommandAutocompleteInteractionResponseCallbackData {
	choices?: APIApplicationCommandOptionChoice[];
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-modal
 * @deprecated API and gateway v8 are deprecated and the types will not receive further updates, please update to v10.
 */
export interface APIModalInteractionResponseCallbackData {
	/**
	 * A developer-defined identifier for the component, max 100 characters
	 */
	custom_id: string;
	/**
	 * The title of the popup modal
	 */
	title: string;
	/**
	 * Between 1 and 5 (inclusive) components that make up the modal
	 */
	components: APIActionRowComponent<APIModalActionRowComponent>[];
}
