import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 9:5 */
export const NewProcess: FC<Props> = memo(function GalileoDesign(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.depthFrame}>
        <div className={classes.depth1Frame}>
          <div className={classes.depth2Frame}>
            <div className={classes.depth3Frame}>
              <div className={classes.depth4Frame}>
                <div className={classes.depth5Frame}>
                  <div className={classes.vector}>
                    <VectorIcon className={classes.icon} />
                  </div>
                  <div className={classes.depth6Frame}></div>
                </div>
              </div>
            </div>
            <div className={classes.depth3Frame1}>
              <div className={classes.depth4Frame2}>
                <div className={classes.depth5Frame2}>
                  <div className={classes.transferAccount}>Transfer account</div>
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
            <div className={classes.accountHolderID}>Account holder ID</div>
          </div>
        </div>
        <div className={classes.depth1Frame2}>
          <div className={classes.depth2Frame3}>
            <div className={classes.depth3Frame3}>
              <div className={classes.depth4Frame4}>
                <div className={classes.depth5Frame3}>
                  <div className={classes.depth6Frame2}>
                    <div className={classes.depth7Frame}>
                      <div className={classes.enterYourAccountHolderID}>Enter your account holder ID</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame3}>
          <div className={classes.depth2Frame4}>
            <div className={classes.residentStatus}>Resident status</div>
          </div>
        </div>
        <div className={classes.depth1Frame4}>
          <div className={classes.depth2Frame5}>
            <div className={classes.depth3Frame4}>
              <div className={classes.depth4Frame5}>
                <div className={classes.depth5Frame4}>
                  <div className={classes.outgoingResident}>Outgoing Resident</div>
                </div>
              </div>
            </div>
            <div className={classes.depth3Frame12}>
              <div className={classes.depth4Frame6}>
                <div className={classes.depth5Frame5}>
                  <div className={classes.incomingResident}>Incoming Resident</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame5}>
          <div className={classes.depth2Frame6}>
            <div className={classes.leavingEnteringDate}>Leaving/Entering date</div>
          </div>
        </div>
        <div className={classes.depth1Frame6}>
          <div className={classes.depth2Frame7}>
            <div className={classes.depth3Frame5}>
              <div className={classes.depth4Frame7}>
                <div className={classes.date}>Date</div>
              </div>
              <div className={classes.depth4Frame1}>
                <div className={classes.depth5Frame6}>
                  <div className={classes.depth6Frame3}>
                    <div className={classes.depth7Frame2}>
                      <div className={classes.mMDDYYYY}>MM/DD/YYYY</div>
                    </div>
                  </div>
                  <div className={classes.depth6Frame1}>
                    <div className={classes.depth7Frame3}>
                      <div className={classes.vector2}>
                        <VectorIcon2 className={classes.icon2} />
                      </div>
                      <div className={classes.depth8Frame}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame7}></div>
      </div>
    </div>
  );
});
