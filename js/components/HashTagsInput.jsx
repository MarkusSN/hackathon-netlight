class HashTagsInput extends React.Component {

  constructor(props) {
    super(props);
  }

  onChange(index, value) {
    const { hashTags, hashTagsOnChange } = this.props;
    let newHashTags = (index === 0) && [value, hashTags[1]] || [hashTags[0], value];
    hashTagsOnChange(newHashTags);
  }

	render() {
    const { hashTags } = this.props;
		return (
			<div>
        <input type='text' value={hashTags[0]} onChange={(e) => this.onChange(0, e.target.value)}/>
        <input type='text' value={hashTags[1]} onChange={(e) => this.onChange(1, e.target.value)}/>
			</div>
		);
	}
}

module.exports = HashTagsInput;
