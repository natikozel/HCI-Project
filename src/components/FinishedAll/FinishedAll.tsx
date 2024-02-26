import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 46:37 */
export const FinishedAll: FC<Props> = memo(function GalileoDesign(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.depthFrame}>
        <div className={classes.depth1Frame}>
          <div className={classes.depth2Frame}>
            <div className={classes.depth3Frame}></div>
            <div className={classes.depth3Frame1}>
              <div className={classes.depth4Frame}>
                <div className={classes.depth5Frame}>
                  <div className={classes.depth6Frame}>
                    <div className={classes.depth7Frame}>
                      <div className={classes.vector}>
                        <VectorIcon className={classes.icon} />
                      </div>
                      <div className={classes.depth8Frame}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame1}>
          <div className={classes.depth2Frame2}>
            <div className={classes.depth3Frame2}>
              <div className={classes.depth4Frame2}></div>
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame2}>
          <div className={classes.depth2Frame3}>
            <div className={classes.allTasksFinishedNothingElseToD}>All tasks finished, nothing else to do!</div>
          </div>
        </div>
        <div className={classes.depth1Frame3}>
          <div className={classes.depth2Frame4}>
            <div className={classes.youReAllCaughtUpEnjoyYourDay}>You&#39;re all caught up. Enjoy your day.</div>
          </div>
        </div>
        <div className={classes.depth1Frame4}>
          <div className={classes.depth2Frame5}>
            <div className={classes.depth3Frame3}>
              <div className={classes.depth4Frame3}>
                <div className={classes.startNewList}>Start new list</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame5}></div>
      </div>
    </div>
  );
});
