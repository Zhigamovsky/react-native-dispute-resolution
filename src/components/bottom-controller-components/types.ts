export interface BookmarkProps {
  state: boolean,
  onChangeState: (state: BookmarkProps['state']) => void
}