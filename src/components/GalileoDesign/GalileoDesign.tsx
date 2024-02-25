import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 3:2 */
export const GalileoDesign: FC<Props> = memo(function GalileoDesign(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.depthFrame}>
        <div className={classes.depth1Frame}>
          <div className={classes.depth2Frame}>
            <div className={classes.depth3Frame}>
              <div className={classes.depth4Frame}>
                <div className={classes.depth5Frame}>
                  {/*<div className={classes.vector}>*/}
                  {/*  <VectorIcon className={classes.icon} />*/}
                  {/*</div>*/}
                  <div className={classes.depth6Frame}></div>
                </div>
              </div>
            </div>
            <div className={classes.depth3Frame1}>
              <div className={classes.depth4Frame2}>
                <div className={classes.depth5Frame2}>
                  <div className={classes.welcomeToYourHomeManagementApp}>Welcome to your home management app</div>
                </div>
              </div>
            </div>
            <div className={classes.depth3Frame2}>
              <div className={classes.depth4Frame3}></div>
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame1}>
          <div className={classes.depth2Frame2}>
            <div className={classes.whatWouldYouLikeToDoToday}>What would you like to do today?</div>
          </div>
        </div>
        <div className={classes.depth1Frame2}>
          <div className={classes.depth2Frame3}>
            <div className={classes.youCanCreateANewProcessOrConti}>
              You can create a new process or continue with an existing one.
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame3}>
          <div className={classes.depth2Frame4}>
            <div className={classes.depth3Frame3}>
              <div className={classes.depth4Frame4}>
                <div className={classes.depth5Frame3}>
                  <div className={classes.depth6Frame2}>
                    <div className={classes.createNewProcess}>Create New Process</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.depth3Frame12}>
              <div className={classes.depth4Frame5}>
                <div className={classes.depth5Frame4}>
                  <div className={classes.depth6Frame3}>
                    <div className={classes.continueExistingProcess}>Continue Existing Process</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame4}></div>
      </div>
    </div>
  );
});
