import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './GalileoDesign.module.css';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 25:392 */
export const MyProcessList: FC<Props> = memo(function GalileoDesign(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.depthFrame}>
        <div className={classes.depth1Frame}>
          <div className={classes.depth2Frame}>
            <div className={classes.depth3Frame}></div>
            <div className={classes.depth3Frame1}>
              <div className={classes.depth4Frame}>
                <div className={classes.depth5Frame}>
                  <div className={classes.letSGetStarted}>Let&#39;s Get Started</div>
                </div>
              </div>
            </div>
            <div className={classes.depth3Frame2}>
              <div className={classes.depth4Frame2}></div>
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame1}>
          <div className={classes.depth2Frame2}>
            <div className={classes.toGetStartedWeLlNeedAFewDetail}>
              To get started, we&#39;ll need a few details from you.
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame2}>
          <div className={classes.depth2Frame3}>
            <div className={classes.depth3Frame3}>
              <div className={classes.depth4Frame3}>
                <div className={classes.account}>Account</div>
              </div>
              <div className={classes.depth4Frame1}>
                <div className={classes.depth5Frame2}>
                  <div className={classes.depth6Frame}>
                    <div className={classes.depth7Frame}>
                      <div className={classes.iD}>ID</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame3}>
          <div className={classes.depth2Frame4}>
            <div className={classes.depth3Frame4}>
              <div className={classes.depth4Frame4}>
                <div className={classes.dateOfBirth}>Date of Birth</div>
              </div>
              <div className={classes.depth4Frame12}>
                <div className={classes.depth5Frame3}>
                  <div className={classes.depth6Frame2}>
                    <div className={classes.depth7Frame2}>
                      <div className={classes.date}>Date</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame4}>
          <div className={classes.depth2Frame5}>
            <div className={classes.depth3Frame5}>
              <div className={classes.weLlWalkYouThroughTheProcessIn}>
                We&#39;ll walk you through the process in just a few steps.
              </div>
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame5}>
          <div className={classes.depth2Frame6}>
            <div className={classes.depth3Frame6}>
              <div className={classes.depth4Frame5}>
                <div className={classes.depth5Frame4}>
                  <div className={classes.vector}>
                    <VectorIcon className={classes.icon} />
                  </div>
                  <div className={classes.depth6Frame3}></div>
                </div>
              </div>
            </div>
            <div className={classes.depth3Frame12}>
              <div className={classes.depth4Frame6}>
                <div className={classes.depth5Frame5}>
                  <div className={classes.step1}>Step 1</div>
                </div>
              </div>
              <div className={classes.depth4Frame13}>
                <div className={classes.depth5Frame6}>
                  <div className={classes._1}>1.0</div>
                </div>
              </div>
              <div className={classes.depth4Frame22}>
                <div className={classes.depth5Frame7}>
                  <div className={classes.weLlAskForSomeBasicInformation}>
                    We&#39;ll ask for some basic information.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame6}>
          <div className={classes.depth2Frame7}>
            <div className={classes.depth3Frame7}>
              <div className={classes.depth4Frame7}>
                <div className={classes.depth5Frame8}>
                  <div className={classes.vector2}>
                    <VectorIcon2 className={classes.icon2} />
                  </div>
                  <div className={classes.depth6Frame4}></div>
                </div>
              </div>
            </div>
            <div className={classes.depth3Frame13}>
              <div className={classes.depth4Frame8}>
                <div className={classes.depth5Frame9}>
                  <div className={classes.step2}>Step 2</div>
                </div>
              </div>
              <div className={classes.depth4Frame14}>
                <div className={classes.depth5Frame10}>
                  <div className={classes._2}>2.0</div>
                </div>
              </div>
              <div className={classes.depth4Frame23}>
                <div className={classes.depth5Frame11}>
                  <div className={classes.weLlAskForSomeBasicInformation2}>
                    We&#39;ll ask for some basic information.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame7}>
          <div className={classes.depth2Frame8}>
            <div className={classes.depth3Frame8}>
              <div className={classes.depth4Frame9}>
                <div className={classes.depth5Frame12}>
                  <div className={classes.vector3}>
                    <VectorIcon3 className={classes.icon3} />
                  </div>
                  <div className={classes.depth6Frame5}></div>
                </div>
              </div>
            </div>
            <div className={classes.depth3Frame14}>
              <div className={classes.depth4Frame10}>
                <div className={classes.depth5Frame13}>
                  <div className={classes.step3}>Step 3</div>
                </div>
              </div>
              <div className={classes.depth4Frame15}>
                <div className={classes.depth5Frame14}>
                  <div className={classes._3}>3.0</div>
                </div>
              </div>
              <div className={classes.depth4Frame24}>
                <div className={classes.depth5Frame15}>
                  <div className={classes.weLlAskForSomeBasicInformation3}>
                    We&#39;ll ask for some basic information.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame8}></div>
        <div className={classes.depth1Frame9}>
          <div className={classes.depth2Frame9}>
            <div className={classes.depth3Frame9}>
              <div className={classes.depth4Frame11}>
                <div className={classes.continue}>Continue</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.depth1Frame10}></div>
      </div>
    </div>
  );
});
