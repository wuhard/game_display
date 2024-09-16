(function anonymous(context
) {
/*
	Index: 0
	Path:  __root__/0018_anonymous::anonymous
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
        // 7 0::ACTIVATE
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = "activate";// JIT: redundant assigment, value unused
        // 7 0::ACTIVATE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.ACTIVATE = "activate";
        } else {
            context.setproperty($names[0], "activate", stack0);
        }
        // 7 0::ADDED
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = "added";// JIT: redundant assigment, value unused
        // 7 0::ADDED
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.ADDED = "added";
        } else {
            context.setproperty($names[1], "added", stack0);
        }
        // 7 0::ADDED_TO_STAGE
        stack0 = scope0.findScopeProperty($names[2], false, false);
//        stack1 = "addedToStage";// JIT: redundant assigment, value unused
        // 7 0::ADDED_TO_STAGE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.ADDED_TO_STAGE = "addedToStage";
        } else {
            context.setproperty($names[2], "addedToStage", stack0);
        }
        // 7 0::CANCEL
        stack0 = scope0.findScopeProperty($names[3], false, false);
//        stack1 = "cancel";// JIT: redundant assigment, value unused
        // 7 0::CANCEL
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CANCEL = "cancel";
        } else {
            context.setproperty($names[3], "cancel", stack0);
        }
        // 7 0::CHANGE
        stack0 = scope0.findScopeProperty($names[4], false, false);
//        stack1 = "change";// JIT: redundant assigment, value unused
        // 7 0::CHANGE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CHANGE = "change";
        } else {
            context.setproperty($names[4], "change", stack0);
        }
        // 7 0::CLEAR
        stack0 = scope0.findScopeProperty($names[5], false, false);
//        stack1 = "clear";// JIT: redundant assigment, value unused
        // 7 0::CLEAR
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CLEAR = "clear";
        } else {
            context.setproperty($names[5], "clear", stack0);
        }
        // 7 0::CLOSE
        stack0 = scope0.findScopeProperty($names[6], false, false);
//        stack1 = "close";// JIT: redundant assigment, value unused
        // 7 0::CLOSE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CLOSE = "close";
        } else {
            context.setproperty($names[6], "close", stack0);
        }
        // 7 0::COMPLETE
        stack0 = scope0.findScopeProperty($names[7], false, false);
//        stack1 = "complete";// JIT: redundant assigment, value unused
        // 7 0::COMPLETE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.COMPLETE = "complete";
        } else {
            context.setproperty($names[7], "complete", stack0);
        }
        // 7 0::CONNECT
        stack0 = scope0.findScopeProperty($names[8], false, false);
//        stack1 = "connect";// JIT: redundant assigment, value unused
        // 7 0::CONNECT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CONNECT = "connect";
        } else {
            context.setproperty($names[8], "connect", stack0);
        }
        // 7 0::COPY
        stack0 = scope0.findScopeProperty($names[9], false, false);
//        stack1 = "copy";// JIT: redundant assigment, value unused
        // 7 0::COPY
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.COPY = "copy";
        } else {
            context.setproperty($names[9], "copy", stack0);
        }
        // 7 0::CUT
        stack0 = scope0.findScopeProperty($names[10], false, false);
//        stack1 = "cut";// JIT: redundant assigment, value unused
        // 7 0::CUT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CUT = "cut";
        } else {
            context.setproperty($names[10], "cut", stack0);
        }
        // 7 0::DEACTIVATE
        stack0 = scope0.findScopeProperty($names[11], false, false);
//        stack1 = "deactivate";// JIT: redundant assigment, value unused
        // 7 0::DEACTIVATE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.DEACTIVATE = "deactivate";
        } else {
            context.setproperty($names[11], "deactivate", stack0);
        }
        // 7 0::ENTER_FRAME
        stack0 = scope0.findScopeProperty($names[12], false, false);
//        stack1 = "enterFrame";// JIT: redundant assigment, value unused
        // 7 0::ENTER_FRAME
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.ENTER_FRAME = "enterFrame";
        } else {
            context.setproperty($names[12], "enterFrame", stack0);
        }
        // 7 0::FRAME_CONSTRUCTED
        stack0 = scope0.findScopeProperty($names[13], false, false);
//        stack1 = "frameConstructed";// JIT: redundant assigment, value unused
        // 7 0::FRAME_CONSTRUCTED
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.FRAME_CONSTRUCTED = "frameConstructed";
        } else {
            context.setproperty($names[13], "frameConstructed", stack0);
        }
        // 7 0::EXIT_FRAME
        stack0 = scope0.findScopeProperty($names[14], false, false);
//        stack1 = "exitFrame";// JIT: redundant assigment, value unused
        // 7 0::EXIT_FRAME
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.EXIT_FRAME = "exitFrame";
        } else {
            context.setproperty($names[14], "exitFrame", stack0);
        }
        // 7 0::FRAME_LABEL
        stack0 = scope0.findScopeProperty($names[15], false, false);
//        stack1 = "frameLabel";// JIT: redundant assigment, value unused
        // 7 0::FRAME_LABEL
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.FRAME_LABEL = "frameLabel";
        } else {
            context.setproperty($names[15], "frameLabel", stack0);
        }
        // 7 0::ID3
        stack0 = scope0.findScopeProperty($names[16], false, false);
//        stack1 = "id3";// JIT: redundant assigment, value unused
        // 7 0::ID3
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.ID3 = "id3";
        } else {
            context.setproperty($names[16], "id3", stack0);
        }
        // 7 0::INIT
        stack0 = scope0.findScopeProperty($names[17], false, false);
//        stack1 = "init";// JIT: redundant assigment, value unused
        // 7 0::INIT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.INIT = "init";
        } else {
            context.setproperty($names[17], "init", stack0);
        }
        // 7 0::MOUSE_LEAVE
        stack0 = scope0.findScopeProperty($names[18], false, false);
//        stack1 = "mouseLeave";// JIT: redundant assigment, value unused
        // 7 0::MOUSE_LEAVE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MOUSE_LEAVE = "mouseLeave";
        } else {
            context.setproperty($names[18], "mouseLeave", stack0);
        }
        // 7 0::OPEN
        stack0 = scope0.findScopeProperty($names[19], false, false);
//        stack1 = "open";// JIT: redundant assigment, value unused
        // 7 0::OPEN
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.OPEN = "open";
        } else {
            context.setproperty($names[19], "open", stack0);
        }
        // 7 0::PASTE
        stack0 = scope0.findScopeProperty($names[20], false, false);
//        stack1 = "paste";// JIT: redundant assigment, value unused
        // 7 0::PASTE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PASTE = "paste";
        } else {
            context.setproperty($names[20], "paste", stack0);
        }
        // 7 0::REMOVED
        stack0 = scope0.findScopeProperty($names[21], false, false);
//        stack1 = "removed";// JIT: redundant assigment, value unused
        // 7 0::REMOVED
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.REMOVED = "removed";
        } else {
            context.setproperty($names[21], "removed", stack0);
        }
        // 7 0::REMOVED_FROM_STAGE
        stack0 = scope0.findScopeProperty($names[22], false, false);
//        stack1 = "removedFromStage";// JIT: redundant assigment, value unused
        // 7 0::REMOVED_FROM_STAGE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.REMOVED_FROM_STAGE = "removedFromStage";
        } else {
            context.setproperty($names[22], "removedFromStage", stack0);
        }
        // 7 0::RENDER
        stack0 = scope0.findScopeProperty($names[23], false, false);
//        stack1 = "render";// JIT: redundant assigment, value unused
        // 7 0::RENDER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.RENDER = "render";
        } else {
            context.setproperty($names[23], "render", stack0);
        }
        // 7 0::RESIZE
        stack0 = scope0.findScopeProperty($names[24], false, false);
//        stack1 = "resize";// JIT: redundant assigment, value unused
        // 7 0::RESIZE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.RESIZE = "resize";
        } else {
            context.setproperty($names[24], "resize", stack0);
        }
        // 7 0::SCROLL
        stack0 = scope0.findScopeProperty($names[25], false, false);
//        stack1 = "scroll";// JIT: redundant assigment, value unused
        // 7 0::SCROLL
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.SCROLL = "scroll";
        } else {
            context.setproperty($names[25], "scroll", stack0);
        }
        // 7 0::TEXT_INTERACTION_MODE_CHANGE
        stack0 = scope0.findScopeProperty($names[26], false, false);
//        stack1 = "textInteractionModeChange";// JIT: redundant assigment, value unused
        // 7 0::TEXT_INTERACTION_MODE_CHANGE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TEXT_INTERACTION_MODE_CHANGE = "textInteractionModeChange";
        } else {
            context.setproperty($names[26], "textInteractionModeChange", stack0);
        }
        // 7 0::SELECT
        stack0 = scope0.findScopeProperty($names[27], false, false);
//        stack1 = "select";// JIT: redundant assigment, value unused
        // 7 0::SELECT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.SELECT = "select";
        } else {
            context.setproperty($names[27], "select", stack0);
        }
        // 7 0::SELECT_ALL
        stack0 = scope0.findScopeProperty($names[28], false, false);
//        stack1 = "selectAll";// JIT: redundant assigment, value unused
        // 7 0::SELECT_ALL
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.SELECT_ALL = "selectAll";
        } else {
            context.setproperty($names[28], "selectAll", stack0);
        }
        // 7 0::SOUND_COMPLETE
        stack0 = scope0.findScopeProperty($names[29], false, false);
//        stack1 = "soundComplete";// JIT: redundant assigment, value unused
        // 7 0::SOUND_COMPLETE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.SOUND_COMPLETE = "soundComplete";
        } else {
            context.setproperty($names[29], "soundComplete", stack0);
        }
        // 7 0::TAB_CHILDREN_CHANGE
        stack0 = scope0.findScopeProperty($names[30], false, false);
//        stack1 = "tabChildrenChange";// JIT: redundant assigment, value unused
        // 7 0::TAB_CHILDREN_CHANGE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TAB_CHILDREN_CHANGE = "tabChildrenChange";
        } else {
            context.setproperty($names[30], "tabChildrenChange", stack0);
        }
        // 7 0::TAB_ENABLED_CHANGE
        stack0 = scope0.findScopeProperty($names[31], false, false);
//        stack1 = "tabEnabledChange";// JIT: redundant assigment, value unused
        // 7 0::TAB_ENABLED_CHANGE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TAB_ENABLED_CHANGE = "tabEnabledChange";
        } else {
            context.setproperty($names[31], "tabEnabledChange", stack0);
        }
        // 7 0::TAB_INDEX_CHANGE
        stack0 = scope0.findScopeProperty($names[32], false, false);
//        stack1 = "tabIndexChange";// JIT: redundant assigment, value unused
        // 7 0::TAB_INDEX_CHANGE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TAB_INDEX_CHANGE = "tabIndexChange";
        } else {
            context.setproperty($names[32], "tabIndexChange", stack0);
        }
        // 7 0::UNLOAD
        stack0 = scope0.findScopeProperty($names[33], false, false);
//        stack1 = "unload";// JIT: redundant assigment, value unused
        // 7 0::UNLOAD
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.UNLOAD = "unload";
        } else {
            context.setproperty($names[33], "unload", stack0);
        }
        // 7 0::FULLSCREEN
        stack0 = scope0.findScopeProperty($names[34], false, false);
//        stack1 = "fullScreen";// JIT: redundant assigment, value unused
        // 7 0::FULLSCREEN
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.FULLSCREEN = "fullScreen";
        } else {
            context.setproperty($names[34], "fullScreen", stack0);
        }
        // 7 0::CONTEXT3D_CREATE
        stack0 = scope0.findScopeProperty($names[35], false, false);
//        stack1 = "context3DCreate";// JIT: redundant assigment, value unused
        // 7 0::CONTEXT3D_CREATE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CONTEXT3D_CREATE = "context3DCreate";
        } else {
            context.setproperty($names[35], "context3DCreate", stack0);
        }
        // 7 0::TEXTURE_READY
        stack0 = scope0.findScopeProperty($names[36], false, false);
//        stack1 = "textureReady";// JIT: redundant assigment, value unused
        // 7 0::TEXTURE_READY
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TEXTURE_READY = "textureReady";
        } else {
            context.setproperty($names[36], "textureReady", stack0);
        }
        // 7 0::VIDEO_FRAME
        stack0 = scope0.findScopeProperty($names[37], false, false);
//        stack1 = "videoFrame";// JIT: redundant assigment, value unused
        // 7 0::VIDEO_FRAME
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.VIDEO_FRAME = "videoFrame";
        } else {
            context.setproperty($names[37], "videoFrame", stack0);
        }
        // 7 0::SUSPEND
        stack0 = scope0.findScopeProperty($names[38], false, false);
//        stack1 = "suspend";// JIT: redundant assigment, value unused
        // 7 0::SUSPEND
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.SUSPEND = "suspend";
        } else {
            context.setproperty($names[38], "suspend", stack0);
        }
        // 7 0::CHANNEL_MESSAGE
        stack0 = scope0.findScopeProperty($names[39], false, false);
//        stack1 = "channelMessage";// JIT: redundant assigment, value unused
        // 7 0::CHANNEL_MESSAGE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CHANNEL_MESSAGE = "channelMessage";
        } else {
            context.setproperty($names[39], "channelMessage", stack0);
        }
        // 7 0::CHANNEL_STATE
        stack0 = scope0.findScopeProperty($names[40], false, false);
//        stack1 = "channelState";// JIT: redundant assigment, value unused
        // 7 0::CHANNEL_STATE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.CHANNEL_STATE = "channelState";
        } else {
            context.setproperty($names[40], "channelState", stack0);
        }
        // 7 0::WORKER_STATE
        stack0 = scope0.findScopeProperty($names[41], false, false);
//        stack1 = "workerState";// JIT: redundant assigment, value unused
        // 7 0::WORKER_STATE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.WORKER_STATE = "workerState";
        } else {
            context.setproperty($names[41], "workerState", stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/0018_anonymous.js
})