import { FC, useState } from 'react';
import { saveAs } from 'file-saver';

import { DocFile, LinkButton } from 'src/components';
import { tDoc } from 'src/types';
import { IconArrow } from 'src/icons';
import { VIOLET } from 'src/constants';

interface IProps {
    list: tDoc[];
}

export const Docs: FC<IProps> = ({ list }) => {
    const [isShowAttachments, setIsShowAttachments] = useState<boolean>(false);

    return (
        <div className="house__grid house__grid--four house__grid--four-small">
            {list?.length > 4 && !isShowAttachments
                ? list.slice(0, 4).map((el: tDoc) => {
                      return (
                          <div className="house__grid_item" key={`doc-file-${el.name}`}>
                              <DocFile
                                  {...el}
                                  onSave={() => saveAs(el.path, `${el.name}.${el.mime}`)}
                              />
                          </div>
                      );
                  })
                : list?.map((el: tDoc) => {
                      return (
                          <div className="house__grid_item" key={`doc-file-${el.name}`}>
                              <DocFile
                                  {...el}
                                  onSave={() => saveAs(el.path, `${el.name}.${el.mime}`)}
                              />
                          </div>
                      );
                  })}
            {list.length > 4 && (
                <div className="house__grid_item--full">
                    <LinkButton
                        text={isShowAttachments ? 'Show Less' : 'Show More'}
                        className="link-button--s link-button--simple"
                        onClick={() => setIsShowAttachments(isShowAttachments ? false : true)}
                    >
                        <span
                            style={{
                                transform: `rotate(${isShowAttachments ? '90deg' : '-90deg'})`,
                            }}
                        >
                            <IconArrow color={VIOLET} width={20} height={20} />
                        </span>
                    </LinkButton>
                </div>
            )}
        </div>
    );
};
