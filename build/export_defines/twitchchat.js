"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitchchat_defines = void 0;
const twitchchat_1 = require("../mysql_models/twitchchat/twitchchat");
const twitch_banned_1 = require("../mysql_models/twitchchat/twitch_banned");
const twitch_osu_binds_1 = require("../mysql_models/twitchchat/twitch_osu_binds");
const twitchchat_enabled_1 = require("../mysql_models/twitchchat/twitchchat_enabled");
const twitchchat_ignores_1 = require("../mysql_models/twitchchat/twitchchat_ignores");
const twitchchat_sended_notify_1 = require("../mysql_models/twitchchat/twitchchat_sended_notify");
const command_aliases_1 = require("../mysql_models/twitchchat/command_aliases");
const custom_commands_1 = require("../mysql_models/twitchchat/custom_commands");
const beatmaps_md5_1 = require("../mysql_models/beatmaps/beatmaps_md5");
const beatmap_id_1 = require("../mysql_models/beatmaps/beatmap_id");
const beatmap_info_1 = require("../mysql_models/beatmaps/beatmap_info");
const beatmap_pp_1 = require("../mysql_models/beatmaps/beatmap_pp");
const beatmap_star_1 = require("../mysql_models/beatmaps/beatmap_star");
const token_1 = require("../mysql_models/discord/token");
const twitchchat_defines = (twitchchat_connection, discord_connection, beatmap_connection) => {
    if (typeof twitchchat_connection === 'undefined' ||
        typeof discord_connection === 'undefined' ||
        typeof beatmap_connection === 'undefined') {
        throw new Error('no connection in twitchchat_defines');
    }
    const model = {
        twitchchat: (0, twitchchat_1.twitchchat)(twitchchat_connection),
        twitch_banned: (0, twitch_banned_1.twitch_banned)(twitchchat_connection),
        twitch_osu_binds: (0, twitch_osu_binds_1.twitch_osu_binds)(twitchchat_connection),
        twitchchat_enabled: (0, twitchchat_enabled_1.twitchchat_enabled)(twitchchat_connection),
        twitchchat_ignores: (0, twitchchat_ignores_1.twitchchat_ignores)(twitchchat_connection),
        twitchchat_sended_notify: (0, twitchchat_sended_notify_1.twitchchat_sended_notify)(twitchchat_connection),
        command_aliases: (0, command_aliases_1.command_aliases)(twitchchat_connection),
        custom_commands: (0, custom_commands_1.custom_commands)(twitchchat_connection),
        beatmap_md5: (0, beatmaps_md5_1.beatmap_md5)(beatmap_connection),
        beatmap_id: (0, beatmap_id_1.beatmap_id)(beatmap_connection),
        beatmap_info: (0, beatmap_info_1.beatmap_info)(beatmap_connection),
        beatmap_pp: (0, beatmap_pp_1.beatmap_pp)(beatmap_connection),
        beatmap_star: (0, beatmap_star_1.beatmap_star)(beatmap_connection),
        token: (0, token_1.token)(discord_connection)
    };
    model.custom_commands.hasMany(model.command_aliases, { foreignKey: 'command_id', foreignKeyConstraints: false });
};
exports.twitchchat_defines = twitchchat_defines;
