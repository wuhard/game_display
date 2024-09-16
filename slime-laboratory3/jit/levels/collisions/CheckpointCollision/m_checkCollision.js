(function anonymous(context
) {
/*
	Index: 1578
	Path:  levels/collisions/CheckpointCollision::m_checkCollision
	Type:  Public
	Kind:  Method
	Super: levels/collisions/LevelCollision
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_checkCollision(local1 /* Hero */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
//                        // JIT: potential type:7 0:entities::Hero// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::aabb
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['aabb'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgaabb;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bgaabb;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.intersects(stack1);
                        } else {
                            // 7 0::intersects
                            {
                                let t = stack0;
                                const m = t.$Bgintersects || (t = sec.box(stack0), t.$Bgintersects);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgintersects (stack1);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [stack1], false);
                                }
                            }
                        }
                        if (!stack0) { p = 79; continue; };
                        // 7 0:levels.collisions::CollisionsManager
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgCollisionsManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::IS_HERO_ON_CHECKPOINT
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.IS_HERO_ON_CHECKPOINT = true;
                        } else {
                            context.setproperty($names[3], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CheckpointCollision::this_skip
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgthis_skip = true;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::DEATHS_AMOUNT
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['DEATHS_AMOUNT'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgDEATHS_AMOUNT;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack1 = 3;
                        stack0 = stack0 >= 3;
                        stack1 = stack0;
                        if (!stack1) { p = 60; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::alreadyCollided
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgalreadyCollided;
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (stack1) { p = 60; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::startingCheckpointFlag
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgstartingCheckpointFlag;
                        stack0 = !!stack0;
                    case 60:
                        if (!stack0) { p = 75; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::hud
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['hud'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bghud;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.showSkipLevelButton(true);
                        } else {
                            // 7 0::showSkipLevelButton
                            {
                                let t = stack0;
                                const m = t.$BgshowSkipLevelButton || (t = sec.box(stack0), t.$BgshowSkipLevelButton);
                                if( typeof m === "function" ) { 
                                    m.call(t, true);
                                } else { 
                                   stack0.axCallProperty($names[7], [true], false);
                                }
                            }
                        }
                    case 75:
                        { p = 124; continue; };
                    case 79:
//                        // JIT: potential type:7 0:entities::Hero// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::aabb
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['aabb'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgaabb;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CheckpointCollision::outer_aabb
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgouter_aabb;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.intersects(stack1);
                        } else {
                            // 7 0::intersects
                            {
                                let t = stack0;
                                const m = t.$Bgintersects || (t = sec.box(stack0), t.$Bgintersects);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgintersects (stack1);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [stack1], false);
                                }
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                        stack1 = stack0;
                        if (!stack1) { p = 104; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CheckpointCollision::this_skip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$Bgthis_skip;
                        stack0 = !!stack0;
                    case 104:
                        if (!stack0) { p = 124; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::hud
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['hud'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bghud;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.showSkipLevelButton(false);
                        } else {
                            // 7 0::showSkipLevelButton
                            {
                                let t = stack0;
                                const m = t.$BgshowSkipLevelButton || (t = sec.box(stack0), t.$BgshowSkipLevelButton);
                                if( typeof m === "function" ) { 
                                    m.call(t, false);
                                } else { 
                                   stack0.axCallProperty($names[7], [false], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CheckpointCollision::this_skip
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgthis_skip = false;
                    case 124:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CheckpointCollision::start_checkpoint
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$Bgstart_checkpoint;
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (stack1) { p = 140; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::alreadyCollided
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgalreadyCollided;
                        stack0 = !!stack0;
                    case 140:
                        if (!stack0) { p = 145; continue; };
                        return;
                    case 145:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CheckpointCollision::is_intersecting
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$Bgis_intersecting;
                        if (stack0) { p = 254; continue; };
//                        // JIT: potential type:7 0:entities::Hero// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::aabb
                        //Possible type:7 0::Boolean
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['aabb'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgaabb;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bgaabb;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.intersects(stack1);
                        } else {
                            // 7 0::intersects
                            {
                                let t = stack0;
                                const m = t.$Bgintersects || (t = sec.box(stack0), t.$Bgintersects);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgintersects (stack1);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [stack1], false);
                                }
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 179; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::ADS_BLOCKED
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['ADS_BLOCKED'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgADS_BLOCKED;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 179:
                        if (!stack0) { p = 250; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CheckpointCollision::NO_REWARD_AD_REQUIRED
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgNO_REWARD_AD_REQUIRED;
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (stack1) { p = 210; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::FREE_CHECKPOINT_COUNTER
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['FREE_CHECKPOINT_COUNTER'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgFREE_CHECKPOINT_COUNTER;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::FREE_CHECKPOINT_SECONDS
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['FREE_CHECKPOINT_SECONDS'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgFREE_CHECKPOINT_SECONDS;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack2 = 30;// JIT: redundant assigment, value unused
                        stack1 *= 30;
                        stack0 = stack0 >= stack1;
                    case 210:
                        if (!stack0) { p = 223; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgunlockCheckpoint();
                        { p = 250; continue; };
                    case 223:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CheckpointCollision::is_intersecting
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgis_intersecting = true;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::hud
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['hud'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bghud;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.showCheckpointButton(true, this);
                        } else {
                            // 7 0::showCheckpointButton
                            {
                                let t = stack0;
                                const m = t.$BgshowCheckpointButton || (t = sec.box(stack0), t.$BgshowCheckpointButton);
                                if( typeof m === "function" ) { 
                                    m.call(t, true, this);
                                } else { 
                                   stack0.axCallProperty($names[11], [true, this], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::hud
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['hud'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bghud;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.onTop();
                        } else {
                            // 7 0::onTop
                            {
                                let t = stack0;
                                const m = t.$BgonTop || (t = sec.box(stack0), t.$BgonTop);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[12], [], false);
                                }
                            }
                        }
                    case 250:
                        { p = 302; continue; };
                    case 254:
//                        // JIT: potential type:7 0:entities::Hero// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::aabb
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['aabb'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgaabb;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CheckpointCollision::outer_aabb
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.geom::Rectangle  */ 
                        stack1 = this.$Bgouter_aabb;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.intersects(stack1);
                        } else {
                            // 7 0::intersects
                            {
                                let t = stack0;
                                const m = t.$Bgintersects || (t = sec.box(stack0), t.$Bgintersects);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgintersects (stack1);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [stack1], false);
                                }
                            }
                        }
                        stack1 = false;
                        stack0 = stack0 == false;
                        stack1 = stack0;
                        if (stack1) { p = 281; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::ADS_BLOCKED
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['ADS_BLOCKED'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgADS_BLOCKED;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack0 = !!stack0;
                    case 281:
                        if (!stack0) { p = 302; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CheckpointCollision::is_intersecting
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgis_intersecting = false;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::hud
                        //Possible type:7 0::level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['hud'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bghud;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.showCheckpointButton(false, this);
                        } else {
                            // 7 0::showCheckpointButton
                            {
                                let t = stack0;
                                const m = t.$BgshowCheckpointButton || (t = sec.box(stack0), t.$BgshowCheckpointButton);
                                if( typeof m === "function" ) { 
                                    m.call(t, false, this);
                                } else { 
                                   stack0.axCallProperty($names[11], [false, this], false);
                                }
                            }
                        }
                    case 302:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CheckpointCollision::is_intersecting
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$Bgis_intersecting;
                        //JIT: Emit inline return
                        if (!stack0) { return; }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::FREE_CHECKPOINT_COUNTER
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['FREE_CHECKPOINT_COUNTER'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgFREE_CHECKPOINT_COUNTER;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::FREE_CHECKPOINT_SECONDS
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['FREE_CHECKPOINT_SECONDS'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgFREE_CHECKPOINT_SECONDS;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack2 = 30;// JIT: redundant assigment, value unused
                        stack1 *= 30;
                        //JIT: Emit inline return
                        if (!(stack1 <= stack0)) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgunlockCheckpoint();
                    case 334:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/CheckpointCollision/m_checkCollision.js
})