(function anonymous(context
) {
/*
	Index: 2427
	Path:  Main::m_init
	Type:  Private
	Kind:  Method
	Super: flash/display/MovieClip
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_init() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
        // local6 is assigned before read, skip init
        let local6 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = NaN;// JIT: redundant assigment, value unused
        local2 = NaN;
//        stack0 = NaN;// JIT: redundant assigment, value unused
        local3 = NaN;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 3::IS_ACTIVE
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$BgIS_ACTIVE = true;
        /* GETLEX We sure that this safe get, represented in TRAIT as Getter  */ 
        stack0 = this.$Bgstage;
        // 7 0:flash.display::StageQuality
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$BgStageQuality;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        // 7 0::LOW
        //Possible type:7 0:flash.display::StageQuality
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['LOW'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgLOW;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::quality
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.quality = stack1;
        } else {
            context.setproperty($names[2], stack1, stack0);
        }
        /* GETLEX We sure that this safe get, represented in TRAIT as Getter  */ 
        stack0 = this.$Bgstage;
        // 7 0:flash.display::StageScaleMode
        temp = scope0.findScopeProperty($names[3], true, false);
        stack1 = temp.$BgStageScaleMode;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[3]);
        }
        // 7 0::NO_SCALE
        //Possible type:7 0:flash.display::StageScaleMode
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['NO_SCALE'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgNO_SCALE;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[4]);
            }
        }
        // 7 0::scaleMode
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.scaleMode = stack1;
        } else {
            context.setproperty($names[5], stack1, stack0);
        }
        /* GETLEX We sure that this safe get, represented in TRAIT as Getter  */ 
        stack0 = this.$Bgstage;
        // 7 0:flash.display::StageAlign
        temp = scope0.findScopeProperty($names[6], true, false);
        stack1 = temp.$BgStageAlign;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[6]);
        }
        // 7 0::TOP_LEFT
        //Possible type:7 0:flash.display::StageAlign
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['TOP_LEFT'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgTOP_LEFT;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[7]);
            }
        }
        // 7 0::align
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.align = stack1;
        } else {
            context.setproperty($names[8], stack1, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[9], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[9]);
        }
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::IS_BROWSER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_BROWSER = false;
        } else {
            context.setproperty($names[10], false, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[9], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[9]);
        }
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::DEBUG
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.DEBUG = false;
        } else {
            context.setproperty($names[11], false, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[9], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[9]);
        }
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::LOW_RES
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.LOW_RES = true;
        } else {
            context.setproperty($names[12], true, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[9], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[9]);
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::rootMovie
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.rootMovie = this;
        } else {
            context.setproperty($names[13], this, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[9], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[9]);
        }
        /* GETLEX We sure that this safe get, represented in TRAIT as Getter  */ 
        stack1 = this.$Bgstage;
        // 7 0::rootStage
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.rootStage = stack1;
        } else {
            context.setproperty($names[14], stack1, stack0);
        }
        // 7 0:com.poki::PokiFlashSDK
        temp = scope0.findScopeProperty($names[15], true, false);
        stack0 = temp.$BgPokiFlashSDK;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[15]);
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.instance();
        } else {
            // 7 0::instance
            {
                let t = stack0;
                const m = t.$Bginstance || (t = sec.box(stack0), t.$Bginstance);
                if( typeof m === "function" ) { 
                    stack0 = t.$Bginstance ();
                } else { 
                    stack0 = stack0.axCallProperty($names[16], [], false);
                }
            }
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Init(this);
        } else {
            // 7 0::Init
            {
                let t = stack0;
                const m = t.$BgInit || (t = sec.box(stack0), t.$BgInit);
                if( typeof m === "function" ) { 
                    m.call(t, this);
                } else { 
                   stack0.axCallProperty($names[17], [this], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:flash.system::Capabilities
        temp = scope0.findScopeProperty($names[18], true, false);
        stack1 = temp.$BgCapabilities;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[18]);
        }
        // 7 0::os
        //Possible type:7 0:flash.system::Capabilities
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['os'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgos;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[19]);
            }
        }
        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
           stack1 = stack1.toLowerCase();
        } else {
            // 7 0:http://adobe.com/AS3/2006/builtin::toLowerCase
            {
                let t = stack1;
                const m = t.$BgtoLowerCase || (t = sec.box(stack1), t.$BgtoLowerCase);
                if( typeof m === "function" ) { 
                    stack1 = t.$BgtoLowerCase ();
                } else { 
                    stack1 = stack1.axCallProperty($names[20], [], false);
                }
            }
        }
//        stack2 = 0;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack0 = this.$BggetWords(stack1, 0);
        stack0 = context.axCoerceString(stack0);
        local1 = stack0;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[9], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[9]);
        }
//        stack1 = local1;// JIT: redundant assigment, value unused
        // 7 0::DEVICE_OS
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.DEVICE_OS = local1;
        } else {
            context.setproperty($names[21], local1, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[9], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[9]);
        }
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::IS_ON_WINDOWS
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_ON_WINDOWS = true;
        } else {
            context.setproperty($names[22], true, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[9], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[9]);
        }
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::IS_ON_MOBILE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_ON_MOBILE = false;
        } else {
            context.setproperty($names[23], false, stack0);
        }
        // 7 0:flash.ui::Multitouch
        temp = scope0.findScopeProperty($names[24], true, false);
        stack0 = temp.$BgMultitouch;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[24]);
        }
        // 7 0:flash.ui::MultitouchInputMode
        temp = scope0.findScopeProperty($names[25], true, false);
        stack1 = temp.$BgMultitouchInputMode;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[25]);
        }
        // 7 0::TOUCH_POINT
        //Possible type:7 0:flash.ui::MultitouchInputMode
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['TOUCH_POINT'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgTOUCH_POINT;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[26]);
            }
        }
        // 7 0::inputMode
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.inputMode = stack1;
        } else {
            context.setproperty($names[27], stack1, stack0);
        }
        // 7 0:flash.system::Capabilities
        temp = scope0.findScopeProperty($names[18], true, false);
        stack0 = temp.$BgCapabilities;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[18]);
        }
        // 7 0::os
        //Possible type:7 0:flash.system::Capabilities
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['os'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgos;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[19]);
            }
        }
        stack0 = context.axCoerceString(stack0);
        stack1 = stack0;
        local4 = stack1;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.toLowerCase();
        } else {
            // 7 0:http://adobe.com/AS3/2006/builtin::toLowerCase
            {
                let t = stack0;
                const m = t.$BgtoLowerCase || (t = sec.box(stack0), t.$BgtoLowerCase);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgtoLowerCase ();
                } else { 
                    stack0 = stack0.axCallProperty($names[20], [], false);
                }
            }
        }
        stack0 = context.axCoerceString(stack0);
        local5 = stack0;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[9], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[9]);
        }
//        stack1 = local5;// JIT: redundant assigment, value unused
        // 7 0::OS
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.OS = local5;
        } else {
            context.setproperty($names[28], local5, stack0);
        }
        stack0 = 1031;
        stack0 = +1031;
        local2 = stack0;
        stack0 = 580;
        stack0 = +580;
        local3 = stack0;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[9], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[9]);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[9], true, false);
        stack1 = temp.$BgUtils;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[9]);
        }
        // 7 0::OS
        //Possible type:7 0::Utils
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['OS'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgOS;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[28]);
            }
        }
        // 7 0::MODEL
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MODEL = stack1;
        } else {
            context.setproperty($names[29], stack1, stack0);
        }
        // 7 0::Number
        temp = scope0.findScopeProperty($names[30], true, false);
        stack0 = temp.$BgNumber;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[30]);
        }
        stack1 = context.savedScope.global.object;
        stack2 = local3;
//        stack3 = local2;// JIT: redundant assigment, value unused
        stack2 /= local2;
        stack0 = context.call(stack0, stack1, [stack2], scope0);
        stack0 = +stack0;
        local6 = stack0;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[9], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[9]);
        }
//        stack1 = local6;// JIT: redundant assigment, value unused
        // 7 0::ratio
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.ratio = local6;
        } else {
            context.setproperty($names[31], local6, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[9], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[9]);
        }
//        stack1 = local2;// JIT: redundant assigment, value unused
        // 7 0::__width
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.__width = local2;
        } else {
            context.setproperty($names[32], local2, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[9], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[9]);
        }
//        stack1 = local3;// JIT: redundant assigment, value unused
        // 7 0::__height
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.__height = local3;
        } else {
            context.setproperty($names[33], local3, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[9], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[9]);
        }
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::LOW_RES
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.LOW_RES = true;
        } else {
            context.setproperty($names[12], true, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgfetchLanguage();
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::Game
        stack1 = scope0.findScopeProperty($names[34], true, false);
        //JIT: Support fast construct:Game/Object
        stack1 = context.constructFast(stack1, [], $names[34]);
        // 7 3::game
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Game  */ 
        this.$Bggame = stack1;
        /* GETLEX We sure that this safe get, represented in TRAIT as Getter  */ 
        stack0 = this.$Bgstage;
        // 7 0:flash.events::Event
        temp = scope0.findScopeProperty($names[35], true, false);
        stack1 = temp.$BgEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[35]);
        }
        // 7 0::ENTER_FRAME
        //Possible type:7 0:flash.events::Event
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['ENTER_FRAME'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgENTER_FRAME;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[36]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 3::_onEnterFrame
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[37]);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.addEventListener(stack1, stack2);
        } else {
            // 7 0::addEventListener
            {
                let t = stack0;
                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[38], [stack1, stack2], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/Main/m_init.js
})