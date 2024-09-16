(function anonymous(context
) {
/*
	Index: 31
	Path:  __root__/0844_anonymous::anonymous
	Type:  Public
	Kind:  null
	Super: -
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_anonymous() {
        let _this = this === context.jsGlobal ? context.savedScope.global.object : this;

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = _this;
        scope0 = context.savedScope.extend(_this);
        // 7 0::VERSION_STRING
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = "1.0.4";// JIT: redundant assigment, value unused
        // 7 0::VERSION_STRING
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.VERSION_STRING = "1.0.4";
        } else {
            context.setproperty($names[0], "1.0.4", stack0);
        }
        // 7 0::ANDROID_VERSION_STRING
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = "1.09";// JIT: redundant assigment, value unused
        // 7 0::ANDROID_VERSION_STRING
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.ANDROID_VERSION_STRING = "1.09";
        } else {
            context.setproperty($names[1], "1.09", stack0);
        }
        // 7 0::KEY_RIGHT
        stack0 = scope0.findScopeProperty($names[2], false, false);
//        stack1 = 39;// JIT: redundant assigment, value unused
        // 7 0::KEY_RIGHT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.KEY_RIGHT = 39;
        } else {
            context.setproperty($names[2], 39, stack0);
        }
        // 7 0::KEY_LEFT
        stack0 = scope0.findScopeProperty($names[3], false, false);
//        stack1 = 37;// JIT: redundant assigment, value unused
        // 7 0::KEY_LEFT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.KEY_LEFT = 37;
        } else {
            context.setproperty($names[3], 37, stack0);
        }
        // 7 0::KEY_UP
        stack0 = scope0.findScopeProperty($names[4], false, false);
//        stack1 = 38;// JIT: redundant assigment, value unused
        // 7 0::KEY_UP
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.KEY_UP = 38;
        } else {
            context.setproperty($names[4], 38, stack0);
        }
        // 7 0::KEY_DOWN
        stack0 = scope0.findScopeProperty($names[5], false, false);
//        stack1 = 40;// JIT: redundant assigment, value unused
        // 7 0::KEY_DOWN
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.KEY_DOWN = 40;
        } else {
            context.setproperty($names[5], 40, stack0);
        }
        // 7 0::KEY_X
        stack0 = scope0.findScopeProperty($names[6], false, false);
//        stack1 = 88;// JIT: redundant assigment, value unused
        // 7 0::KEY_X
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.KEY_X = 88;
        } else {
            context.setproperty($names[6], 88, stack0);
        }
        // 7 0::KEY_Z
        stack0 = scope0.findScopeProperty($names[7], false, false);
//        stack1 = 90;// JIT: redundant assigment, value unused
        // 7 0::KEY_Z
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.KEY_Z = 90;
        } else {
            context.setproperty($names[7], 90, stack0);
        }
        // 7 0::KEY_ENTER
        stack0 = scope0.findScopeProperty($names[8], false, false);
//        stack1 = 13;// JIT: redundant assigment, value unused
        // 7 0::KEY_ENTER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.KEY_ENTER = 13;
        } else {
            context.setproperty($names[8], 13, stack0);
        }
        // 7 0::KEY_SPACE
        stack0 = scope0.findScopeProperty($names[9], false, false);
//        stack1 = 32;// JIT: redundant assigment, value unused
        // 7 0::KEY_SPACE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.KEY_SPACE = 32;
        } else {
            context.setproperty($names[9], 32, stack0);
        }
        // 7 0::DEATHS_AMOUNT
        stack0 = scope0.findScopeProperty($names[10], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::DEATHS_AMOUNT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.DEATHS_AMOUNT = 0;
        } else {
            context.setproperty($names[10], 0, stack0);
        }
        // 7 0::SKIP_LEVEL_REWARD
        stack0 = scope0.findScopeProperty($names[11], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::SKIP_LEVEL_REWARD
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.SKIP_LEVEL_REWARD = false;
        } else {
            context.setproperty($names[11], false, stack0);
        }
        // 7 0::IS_USING_JOYPAD
        stack0 = scope0.findScopeProperty($names[12], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::IS_USING_JOYPAD
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_USING_JOYPAD = false;
        } else {
            context.setproperty($names[12], false, stack0);
        }
        // 7 0::IS_PLAYSTATION_JOYPAD
        stack0 = scope0.findScopeProperty($names[13], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::IS_PLAYSTATION_JOYPAD
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_PLAYSTATION_JOYPAD = false;
        } else {
            context.setproperty($names[13], false, stack0);
        }
        // 7 0::ADS_BLOCKED
        stack0 = scope0.findScopeProperty($names[14], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::ADS_BLOCKED
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.ADS_BLOCKED = false;
        } else {
            context.setproperty($names[14], false, stack0);
        }
        // 7 0::REWARD_AD_TYPE
        stack0 = scope0.findScopeProperty($names[15], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::REWARD_AD_TYPE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.REWARD_AD_TYPE = 0;
        } else {
            context.setproperty($names[15], 0, stack0);
        }
        // 7 0::REWARD_SKIP_LEVEL
        stack0 = scope0.findScopeProperty($names[16], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::REWARD_SKIP_LEVEL
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.REWARD_SKIP_LEVEL = 1;
        } else {
            context.setproperty($names[16], 1, stack0);
        }
        // 7 0::REWARD_CHECKPOINT
        stack0 = scope0.findScopeProperty($names[17], false, false);
//        stack1 = 2;// JIT: redundant assigment, value unused
        // 7 0::REWARD_CHECKPOINT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.REWARD_CHECKPOINT = 2;
        } else {
            context.setproperty($names[17], 2, stack0);
        }
        // 7 0::REWARD_SKIN
        stack0 = scope0.findScopeProperty($names[18], false, false);
//        stack1 = 3;// JIT: redundant assigment, value unused
        // 7 0::REWARD_SKIN
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.REWARD_SKIN = 3;
        } else {
            context.setproperty($names[18], 3, stack0);
        }
        // 7 0::FREE_CHECKPOINT_COUNTER
        stack0 = scope0.findScopeProperty($names[19], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::FREE_CHECKPOINT_COUNTER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.FREE_CHECKPOINT_COUNTER = 0;
        } else {
            context.setproperty($names[19], 0, stack0);
        }
        // 7 0::FREE_CHECKPOINT_SECONDS
        stack0 = scope0.findScopeProperty($names[20], false, false);
//        stack1 = 45;// JIT: redundant assigment, value unused
        // 7 0::FREE_CHECKPOINT_SECONDS
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.FREE_CHECKPOINT_SECONDS = 45;
        } else {
            context.setproperty($names[20], 45, stack0);
        }
        // 7 0::SKIN_1
        stack0 = scope0.findScopeProperty($names[21], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::SKIN_1
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.SKIN_1 = 0;
        } else {
            context.setproperty($names[21], 0, stack0);
        }
        // 7 0::GFX_SCALE
        stack0 = scope0.findScopeProperty($names[22], false, false);
//        stack1 = 3;// JIT: redundant assigment, value unused
        // 7 0::GFX_SCALE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.GFX_SCALE = 3;
        } else {
            context.setproperty($names[22], 3, stack0);
        }
        // 7 0::AVOID_PAUSE
        stack0 = scope0.findScopeProperty($names[23], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::AVOID_PAUSE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.AVOID_PAUSE = false;
        } else {
            context.setproperty($names[23], false, stack0);
        }
        // 7 0::LOCK_MUSIC
        stack0 = scope0.findScopeProperty($names[24], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::LOCK_MUSIC
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.LOCK_MUSIC = false;
        } else {
            context.setproperty($names[24], false, stack0);
        }
        // 7 0::OLD_IOS_DEVICE
        stack0 = scope0.findScopeProperty($names[25], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::OLD_IOS_DEVICE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.OLD_IOS_DEVICE = false;
        } else {
            context.setproperty($names[25], false, stack0);
        }
        // 7 0::Lang
        stack0 = scope0.findScopeProperty($names[26], false, false);
//        stack1 = "_en";// JIT: redundant assigment, value unused
        // 7 0::Lang
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.Lang = "_en";
        } else {
            context.setproperty($names[26], "_en", stack0);
        }
        // 7 0::CROSS_PROMOTION_SHOWN
        stack0 = scope0.findScopeProperty($names[27], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::CROSS_PROMOTION_SHOWN
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CROSS_PROMOTION_SHOWN = false;
        } else {
            context.setproperty($names[27], false, stack0);
        }
        // 7 0::SCREEN_WIDTH
        stack0 = scope0.findScopeProperty($names[28], false, false);
//        stack1 = 320;// JIT: redundant assigment, value unused
        // 7 0::SCREEN_WIDTH
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.SCREEN_WIDTH = 320;
        } else {
            context.setproperty($names[28], 320, stack0);
        }
        // 7 0::SCREEN_HEIGHT
        stack0 = scope0.findScopeProperty($names[29], false, false);
//        stack1 = 240;// JIT: redundant assigment, value unused
        // 7 0::SCREEN_HEIGHT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.SCREEN_HEIGHT = 240;
        } else {
            context.setproperty($names[29], 240, stack0);
        }
        // 7 0::LAST_LEVEL
        stack0 = scope0.findScopeProperty($names[30], false, false);
//        stack1 = 15;// JIT: redundant assigment, value unused
        // 7 0::LAST_LEVEL
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.LAST_LEVEL = 15;
        } else {
            context.setproperty($names[30], 15, stack0);
        }
        // 7 0::TILE_WIDTH
        stack0 = scope0.findScopeProperty($names[31], false, false);
//        stack1 = 16;// JIT: redundant assigment, value unused
        // 7 0::TILE_WIDTH
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TILE_WIDTH = 16;
        } else {
            context.setproperty($names[31], 16, stack0);
        }
        // 7 0::TILE_HEIGHT
        stack0 = scope0.findScopeProperty($names[32], false, false);
//        stack1 = 16;// JIT: redundant assigment, value unused
        // 7 0::TILE_HEIGHT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TILE_HEIGHT = 16;
        } else {
            context.setproperty($names[32], 16, stack0);
        }
        // 7 0::AdsOn
        stack0 = scope0.findScopeProperty($names[33], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::AdsOn
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.AdsOn = false;
        } else {
            context.setproperty($names[33], false, stack0);
        }
        // 7 0::AdsCounter
        stack0 = scope0.findScopeProperty($names[34], false, false);
//        stack1 = -1;// JIT: redundant assigment, value unused
        // 7 0::AdsCounter
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.AdsCounter = -1;
        } else {
            context.setproperty($names[34], -1, stack0);
        }
        // 7 0::IS_BROWSER
        stack0 = scope0.findScopeProperty($names[35], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::IS_BROWSER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_BROWSER = false;
        } else {
            context.setproperty($names[35], false, stack0);
        }
        // 7 0::IS_IPAD
        stack0 = scope0.findScopeProperty($names[36], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::IS_IPAD
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_IPAD = false;
        } else {
            context.setproperty($names[36], false, stack0);
        }
        // 7 0::IS_IPHONE
        stack0 = scope0.findScopeProperty($names[37], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::IS_IPHONE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_IPHONE = false;
        } else {
            context.setproperty($names[37], false, stack0);
        }
        // 7 0::IS_16_9
        stack0 = scope0.findScopeProperty($names[38], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::IS_16_9
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_16_9 = false;
        } else {
            context.setproperty($names[38], false, stack0);
        }
        // 7 0::IS_6
        stack0 = scope0.findScopeProperty($names[39], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::IS_6
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_6 = false;
        } else {
            context.setproperty($names[39], false, stack0);
        }
        // 7 0::IS_6_PLUS
        stack0 = scope0.findScopeProperty($names[40], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::IS_6_PLUS
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_6_PLUS = false;
        } else {
            context.setproperty($names[40], false, stack0);
        }
        // 7 0::IS_RETINA
        stack0 = scope0.findScopeProperty($names[41], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::IS_RETINA
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_RETINA = false;
        } else {
            context.setproperty($names[41], false, stack0);
        }
        // 7 0::IS_IPHONE_X
        stack0 = scope0.findScopeProperty($names[42], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::IS_IPHONE_X
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_IPHONE_X = false;
        } else {
            context.setproperty($names[42], false, stack0);
        }
        // 7 0::OS
        stack0 = scope0.findScopeProperty($names[43], false, false);
//        stack1 = "";// JIT: redundant assigment, value unused
        // 7 0::OS
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.OS = "";
        } else {
            context.setproperty($names[43], "", stack0);
        }
        // 7 0::VER
        stack0 = scope0.findScopeProperty($names[44], false, false);
//        stack1 = 7;// JIT: redundant assigment, value unused
        // 7 0::VER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.VER = 7;
        } else {
            context.setproperty($names[44], 7, stack0);
        }
        // 7 0::VER_ANDROID
        stack0 = scope0.findScopeProperty($names[45], false, false);
//        stack1 = 4;// JIT: redundant assigment, value unused
        // 7 0::VER_ANDROID
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.VER_ANDROID = 4;
        } else {
            context.setproperty($names[45], 4, stack0);
        }
        // 7 0::MODEL
        stack0 = scope0.findScopeProperty($names[46], false, false);
//        stack1 = "";// JIT: redundant assigment, value unused
        // 7 0::MODEL
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MODEL = "";
        } else {
            context.setproperty($names[46], "", stack0);
        }
        // 7 0::IS_ON_WINDOWS
        stack0 = scope0.findScopeProperty($names[47], false, false);
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::IS_ON_WINDOWS
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_ON_WINDOWS = true;
        } else {
            context.setproperty($names[47], true, stack0);
        }
        // 7 0::IS_ANDROID
        stack0 = scope0.findScopeProperty($names[48], false, false);
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::IS_ANDROID
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_ANDROID = true;
        } else {
            context.setproperty($names[48], true, stack0);
        }
        // 7 0::LOW_RES
        stack0 = scope0.findScopeProperty($names[49], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::LOW_RES
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.LOW_RES = false;
        } else {
            context.setproperty($names[49], false, stack0);
        }
        // 7 0::DEBUG
        stack0 = scope0.findScopeProperty($names[50], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::DEBUG
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.DEBUG = false;
        } else {
            context.setproperty($names[50], false, stack0);
        }
        // 7 0::PPI_RATIO
        stack0 = scope0.findScopeProperty($names[51], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::PPI_RATIO
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PPI_RATIO = 1;
        } else {
            context.setproperty($names[51], 1, stack0);
        }
        // 7 0::X_SCREEN_MARGIN
        stack0 = scope0.findScopeProperty($names[52], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::X_SCREEN_MARGIN
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.X_SCREEN_MARGIN = 0;
        } else {
            context.setproperty($names[52], 0, stack0);
        }
        // 7 0::Y_SCREEN_MARGIN
        stack0 = scope0.findScopeProperty($names[53], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::Y_SCREEN_MARGIN
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.Y_SCREEN_MARGIN = 0;
        } else {
            context.setproperty($names[53], 0, stack0);
        }
        // 7 0::LEVELS_PLAYED
        stack0 = scope0.findScopeProperty($names[54], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::LEVELS_PLAYED
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.LEVELS_PLAYED = 0;
        } else {
            context.setproperty($names[54], 0, stack0);
        }
        // 7 0::CurrentSlot
        stack0 = scope0.findScopeProperty($names[55], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::CurrentSlot
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CurrentSlot = 0;
        } else {
            context.setproperty($names[55], 0, stack0);
        }
        // 7 0::m_scale
        stack0 = scope0.findScopeProperty($names[56], false, false);
//        stack1 = 30;// JIT: redundant assigment, value unused
        // 7 0::m_scale
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.m_scale = 30;
        } else {
            context.setproperty($names[56], 30, stack0);
        }
        // 7 0::CurrentLevel
        stack0 = scope0.findScopeProperty($names[57], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::CurrentLevel
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CurrentLevel = 1;
        } else {
            context.setproperty($names[57], 1, stack0);
        }
        // 7 0::MAX_Y_VEL
        stack0 = scope0.findScopeProperty($names[58], false, false);
//        stack1 = 10;// JIT: redundant assigment, value unused
        // 7 0::MAX_Y_VEL
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MAX_Y_VEL = 10;
        } else {
            context.setproperty($names[58], 10, stack0);
        }
        // 7 0::MIN_X_VEL
        stack0 = scope0.findScopeProperty($names[59], false, false);
//        stack1 = 0.2;// JIT: redundant assigment, value unused
        // 7 0::MIN_X_VEL
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MIN_X_VEL = 0.2;
        } else {
            context.setproperty($names[59], 0.2, stack0);
        }
        // 7 0::MAX_X_VEL
        stack0 = scope0.findScopeProperty($names[60], false, false);
//        stack1 = 2;// JIT: redundant assigment, value unused
        // 7 0::MAX_X_VEL
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MAX_X_VEL = 2;
        } else {
            context.setproperty($names[60], 2, stack0);
        }
        // 7 0::HERO_WALK_X_VEL
        stack0 = scope0.findScopeProperty($names[61], false, false);
//        stack1 = 0.8;// JIT: redundant assigment, value unused
        // 7 0::HERO_WALK_X_VEL
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.HERO_WALK_X_VEL = 0.8;
        } else {
            context.setproperty($names[61], 0.8, stack0);
        }
        // 7 0::HERO_DRAWBACK_X_VEL
        stack0 = scope0.findScopeProperty($names[62], false, false);
//        stack1 = 0.25;// JIT: redundant assigment, value unused
        // 7 0::HERO_DRAWBACK_X_VEL
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.HERO_DRAWBACK_X_VEL = 0.25;
        } else {
            context.setproperty($names[62], 0.25, stack0);
        }
        // 7 0::JUMP_POWER
        stack0 = scope0.findScopeProperty($names[63], false, false);
//        stack1 = -7.5;// JIT: redundant assigment, value unused
        // 7 0::JUMP_POWER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.JUMP_POWER = -7.5;
        } else {
            context.setproperty($names[63], -7.5, stack0);
        }
        // 7 0::SKATE_JUMP_POWER
        stack0 = scope0.findScopeProperty($names[64], false, false);
//        stack1 = -10;// JIT: redundant assigment, value unused
        // 7 0::SKATE_JUMP_POWER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.SKATE_JUMP_POWER = -10;
        } else {
            context.setproperty($names[64], -10, stack0);
        }
        // 7 0::HERO_FRICTION
        stack0 = scope0.findScopeProperty($names[65], false, false);
//        stack1 = 0.8;// JIT: redundant assigment, value unused
        // 7 0::HERO_FRICTION
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.HERO_FRICTION = 0.8;
        } else {
            context.setproperty($names[65], 0.8, stack0);
        }
        // 7 0::HERO_Y_FRICTION
        stack0 = scope0.findScopeProperty($names[66], false, false);
//        stack1 = 0.65;// JIT: redundant assigment, value unused
        // 7 0::HERO_Y_FRICTION
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.HERO_Y_FRICTION = 0.65;
        } else {
            context.setproperty($names[66], 0.65, stack0);
        }
        // 7 0::HERO_LIGHT_Y_FRICTION
        stack0 = scope0.findScopeProperty($names[67], false, false);
//        stack1 = 0.98;// JIT: redundant assigment, value unused
        // 7 0::HERO_LIGHT_Y_FRICTION
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.HERO_LIGHT_Y_FRICTION = 0.98;
        } else {
            context.setproperty($names[67], 0.98, stack0);
        }
        // 7 0::PlayerPoints
        stack0 = scope0.findScopeProperty($names[68], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::PlayerPoints
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerPoints = 0;
        } else {
            context.setproperty($names[68], 0, stack0);
        }
        // 7 0::PlayerPointsToReach
        stack0 = scope0.findScopeProperty($names[69], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::PlayerPointsToReach
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerPointsToReach = 0;
        } else {
            context.setproperty($names[69], 0, stack0);
        }
        // 7 0::PlayerTarget
        stack0 = scope0.findScopeProperty($names[70], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::PlayerTarget
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerTarget = 0;
        } else {
            context.setproperty($names[70], 0, stack0);
        }
        // 7 0::PlayerTargetToReach
        stack0 = scope0.findScopeProperty($names[71], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::PlayerTargetToReach
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerTargetToReach = 0;
        } else {
            context.setproperty($names[71], 0, stack0);
        }
        // 7 0::PlayerLifes
        stack0 = scope0.findScopeProperty($names[72], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::PlayerLifes
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerLifes = 1;
        } else {
            context.setproperty($names[72], 1, stack0);
        }
        // 7 0::PlayerTime
        stack0 = scope0.findScopeProperty($names[73], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::PlayerTime
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerTime = 0;
        } else {
            context.setproperty($names[73], 0, stack0);
        }
        // 7 0::PlayerItems
        stack0 = scope0.findScopeProperty($names[74], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::PlayerItems
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerItems = 0;
        } else {
            context.setproperty($names[74], 0, stack0);
        }
        // 7 0::PlayerDynamites
        stack0 = scope0.findScopeProperty($names[75], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::PlayerDynamites
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerDynamites = 0;
        } else {
            context.setproperty($names[75], 0, stack0);
        }
        // 7 0::PlayerKeys
        stack0 = scope0.findScopeProperty($names[76], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::PlayerKeys
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerKeys = 0;
        } else {
            context.setproperty($names[76], 0, stack0);
        }
        // 7 0::PlayerCoins
        stack0 = scope0.findScopeProperty($names[77], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::PlayerCoins
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerCoins = 0;
        } else {
            context.setproperty($names[77], 0, stack0);
        }
        // 7 0::BombExplosions
        stack0 = scope0.findScopeProperty($names[78], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::BombExplosions
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.BombExplosions = 0;
        } else {
            context.setproperty($names[78], 0, stack0);
        }
        // 7 0::MoreTimes
        stack0 = scope0.findScopeProperty($names[79], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::MoreTimes
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MoreTimes = 0;
        } else {
            context.setproperty($names[79], 0, stack0);
        }
        // 7 0::IceTimes
        stack0 = scope0.findScopeProperty($names[80], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::IceTimes
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IceTimes = 0;
        } else {
            context.setproperty($names[80], 0, stack0);
        }
        // 7 0::StarTimes
        stack0 = scope0.findScopeProperty($names[81], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::StarTimes
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.StarTimes = 0;
        } else {
            context.setproperty($names[81], 0, stack0);
        }
        // 7 0::PopAllEntityFlag
        stack0 = scope0.findScopeProperty($names[82], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::PopAllEntityFlag
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PopAllEntityFlag = false;
        } else {
            context.setproperty($names[82], false, stack0);
        }
        // 7 0::AddMoreTimeFlag
        stack0 = scope0.findScopeProperty($names[83], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::AddMoreTimeFlag
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.AddMoreTimeFlag = false;
        } else {
            context.setproperty($names[83], false, stack0);
        }
        // 7 0::IceFlag
        stack0 = scope0.findScopeProperty($names[84], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::IceFlag
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IceFlag = false;
        } else {
            context.setproperty($names[84], false, stack0);
        }
        // 7 0::StarFlag
        stack0 = scope0.findScopeProperty($names[85], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::StarFlag
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.StarFlag = false;
        } else {
            context.setproperty($names[85], false, stack0);
        }
        // 7 0::JustHitEnemy
        stack0 = scope0.findScopeProperty($names[86], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::JustHitEnemy
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.JustHitEnemy = false;
        } else {
            context.setproperty($names[86], false, stack0);
        }
        // 7 0::AlreadySet
        stack0 = scope0.findScopeProperty($names[87], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::AlreadySet
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.AlreadySet = false;
        } else {
            context.setproperty($names[87], false, stack0);
        }
        // 7 0::BossCounter
        stack0 = scope0.findScopeProperty($names[88], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::BossCounter
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.BossCounter = false;
        } else {
            context.setproperty($names[88], false, stack0);
        }
        // 7 0::BossDefeated
        stack0 = scope0.findScopeProperty($names[89], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::BossDefeated
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.BossDefeated = false;
        } else {
            context.setproperty($names[89], false, stack0);
        }
        // 7 0::SoundOn
        stack0 = scope0.findScopeProperty($names[90], false, false);
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::SoundOn
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.SoundOn = true;
        } else {
            context.setproperty($names[90], true, stack0);
        }
        // 7 0::MusicOn
        stack0 = scope0.findScopeProperty($names[91], false, false);
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::MusicOn
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MusicOn = true;
        } else {
            context.setproperty($names[91], true, stack0);
        }
        // 7 0::PauseOn
        stack0 = scope0.findScopeProperty($names[92], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::PauseOn
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PauseOn = false;
        } else {
            context.setproperty($names[92], false, stack0);
        }
        // 7 0::GlassesOn
        stack0 = scope0.findScopeProperty($names[93], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::GlassesOn
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.GlassesOn = false;
        } else {
            context.setproperty($names[93], false, stack0);
        }
        // 7 0::SettingsOn
        stack0 = scope0.findScopeProperty($names[94], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::SettingsOn
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.SettingsOn = false;
        } else {
            context.setproperty($names[94], false, stack0);
        }
        // 7 0::DEBUG_MODE
        stack0 = scope0.findScopeProperty($names[95], false, false);
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::DEBUG_MODE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.DEBUG_MODE = true;
        } else {
            context.setproperty($names[95], true, stack0);
        }
        // 7 0::DEBUG_FIRST_TIME
        stack0 = scope0.findScopeProperty($names[96], false, false);
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::DEBUG_FIRST_TIME
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.DEBUG_FIRST_TIME = true;
        } else {
            context.setproperty($names[96], true, stack0);
        }
        // 7 0::TOP_DOWN
        stack0 = scope0.findScopeProperty($names[97], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::TOP_DOWN
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TOP_DOWN = 1;
        } else {
            context.setproperty($names[97], 1, stack0);
        }
        // 7 0::DOWN_TOP
        stack0 = scope0.findScopeProperty($names[98], false, false);
//        stack1 = 2;// JIT: redundant assigment, value unused
        // 7 0::DOWN_TOP
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.DOWN_TOP = 2;
        } else {
            context.setproperty($names[98], 2, stack0);
        }
        // 7 0::WHITE
        stack0 = scope0.findScopeProperty($names[99], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::WHITE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.WHITE = 1;
        } else {
            context.setproperty($names[99], 1, stack0);
        }
        // 7 0::BLACK
        stack0 = scope0.findScopeProperty($names[100], false, false);
//        stack1 = 2;// JIT: redundant assigment, value unused
        // 7 0::BLACK
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.BLACK = 2;
        } else {
            context.setproperty($names[100], 2, stack0);
        }
        // 7 0::DEVICE_OS
        stack0 = scope0.findScopeProperty($names[101], false, false);
//        stack1 = "";// JIT: redundant assigment, value unused
        // 7 0::DEVICE_OS
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.DEVICE_OS = "";
        } else {
            context.setproperty($names[101], "", stack0);
        }
        // 7 0::IS_ON_MOBILE
        stack0 = scope0.findScopeProperty($names[102], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::IS_ON_MOBILE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_ON_MOBILE = false;
        } else {
            context.setproperty($names[102], false, stack0);
        }
        // 7 0::EasyMode
        stack0 = scope0.findScopeProperty($names[103], false, false);
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::EasyMode
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.EasyMode = true;
        } else {
            context.setproperty($names[103], true, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/0844_anonymous.js
})