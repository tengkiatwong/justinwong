"use strict";
//initialize FireBase
 var database = firebase.database().ref('comments');

var writeComment = function(id,comment,user,date){
    database.push({
        id:id,
        comment: comment,
        user:user,
        date:date
    });
}

var comments = [];
database.on('value', function(snapshot) {
    var allComments = snapshot.val();
    snapshot.forEach(function(childSnapShot){
       comments.unshift(childSnapShot.val()); 
    }).then(console.log("all done!"));
    console.log(comments);
//    CommentsBox.setState({ data: comments });
});


// Comments Box

var CommentsBox = React.createClass({
	displayName: "CommentsBox",

	getInitialState: function getInitialState() {
		return {
//			data: [{ "id": "00001", "task": "That's great work Justin! I look forward to more from you in the future", "user": "Elon Musk","date":"05/04/2017" }, { "id": "00002", "task": "Eat breakfast", "user": "Benjamin Ong","date":"05/04/2017" }, { "id": "00003", "task": "Sanitize,animate,FireBase,AntiSpam,load-previous-posts", "user": "Brad Pitt","date":"05/04/2017" }]
            data: comments
		};
	},
    
    // Generate Unique ID for each Comment
	generateId: function generateId() {
		return Math.floor(Math.random() * 90000) + 10000;
	},
    
    //Delete Comment
	handleNodeRemoval: function handleNodeRemoval(nodeId) {
		var data = this.state.data;
		data = data.filter(function (el) {
			return el.id !== nodeId;
		});
		this.setState({ data: data });
		return;
	},
    
    //Submit Comment
	handleSubmit: function handleSubmit(comment,user) {
        
//        console.log(user);
		var data = this.state.data;
		var id = this.generateId().toString();
		var complete = 'false';
        var getDate = function(){
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();

            if(dd<10) {
                dd='0'+dd
            } 

            if(mm<10) {
                mm='0'+mm
            } 

            today = mm+'/'+dd+'/'+yyyy;
            return today;
        };
        
        var dateToday = getDate();
        writeComment(id,comment,user,dateToday);
//        data.unshift({ id: id, comment: comment, user: user,date: dateToday });
//		this.setState({ data: data });
	},
    
	handleToggleComplete: function handleToggleComplete(nodeId) {
		var data = this.state.data;
		for (var i in data) {
			if (data[i].id == nodeId) {
				data[i].complete = data[i].complete === 'true' ? 'false' : 'true';
				break;
			}
		}
		this.setState({ data: data });
		return;
	},
    
    //render function
	render: function render() {
		return React.createElement(
			"div",
//			{ className: "" },
			React.createElement(
				"h1",
				{ className: "vert-offset-top-0" },
				"Comments:"
			),
            React.createElement(CommentForm, { onTaskSubmit: this.handleSubmit }),
			React.createElement(CommentList, { data: this.state.data, removeNode: this.handleNodeRemoval})
			
		);
	}
});

var CommentList = React.createClass({
	displayName: "CommentsList",

	removeNode: function removeNode(nodeId) {
		this.props.removeNode(nodeId);
		return;
	},
	render: function render() {
        // find out what this.props.data.map(function(listItem){},this) means
		var listNodes = this.props.data.map(function (listItem) {
			return React.createElement(CommentItem, { key: listItem.id, nodeId: listItem.id, comment: listItem.comment, user: listItem.user,date:listItem.date, removeNode: this.removeNode});
		}, this);
		return React.createElement(
			"div",
			{ className: "list-group1" },
			listNodes
		);
	}
});

var CommentItem = React.createClass({
	displayName: "CommentItem",

	removeNode: function removeNode(e) {
		e.preventDefault();
		this.props.removeNode(this.props.nodeId);
		return;
	},
    
	updateClass: function updateClass() {},
	render: function render() {
		var classes = 'list-group-item1 clearfix1 comment-item row';
		return React.createElement(
			"div",
			{ className: classes },
            React.createElement("img",{className:"comment-picture",src:"img/profile-placeholder.jpg"}),
			React.createElement("div",{className:"user-name"},this.props.user),
            React.createElement("span",{className:"date-posted"},this.props.date),
            React.createElement("div",{className:"user-comment"},this.props.comment),
		);

	}
});

var CommentForm = React.createClass({
	displayName: "CommentForm",
    
    //Character Count
    getInitialState: function() {
        var max_char = 150;
        return {
            chars_left: max_char,
            max_char: max_char
        };
    },
    handleChange(event) {
        var input = event.target.value;
        this.setState({
            chars_left: 150 - input.length
        });
    },
    
    //submit Comment
	doSubmit: function doSubmit(e) {
		e.preventDefault();
        
		var comment = React.findDOMNode(this.refs.comment).value.trim();
        
        
        var user = React.findDOMNode(this.refs.user).value.trim();
		if (!comment || !user) {
			return;
		}
		this.props.onTaskSubmit(comment,user);
		React.findDOMNode(this.refs.comment).value = '';
        this.setState({
            chars_left: this.state.max_char
        });
		return;
	},
    
	render: function render() {
        
		return React.createElement(
			"div",
			{ className: "commentForm vert-offset-top-2" },
//			React.createElement("hr", null),
			React.createElement(
				"div",
				{ className: "clearfix" },
				React.createElement(
					"form",
					{ className: "todoForm form-horizontal", onSubmit: this.doSubmit },
					React.createElement(
						"div",
						{ className: "form-group" },
                        
                        // input for name
						React.createElement(
							"div",
							{ className: "col-md-3 name-input" },
							React.createElement("input", { type: "text", id: "comment", ref: "user", className: "form-control", placeholder: "Name" })
						),
                        
                        //input for Comment
						React.createElement(
							"div",
							{ className: "col-md-12" },
							React.createElement("input", { type: "text", id: "comment", ref: "comment", className: "form-control", placeholder: "Write your comment here",onChange:this.handleChange.bind(this) })
						),
					),
                    
                    
                    //Submit Button
					React.createElement(
						"div",
						{ className: "row inputs" },
						React.createElement(
							"div",
							{ className: "col-md-10" },
							React.createElement("input", { type: "submit", value: "Comment", className: "btn btn-primary submit-button",disabled:this.state.chars_left < 0 })
						),
                        React.createElement("div", {className:"character-count pull-right"},"Characters left: "+this.state.chars_left
                        ),
					),
                    
				)
			)
		);
	}
});
                
                
                
//wait for comments to finish downloading before generating comments box
database.on('value', function(snapshot) {
    var allComments = snapshot.val();
    snapshot.forEach(function(childSnapShot){
       comments.unshift(childSnapShot.val()); 
    }).then(React.render(React.createElement(CommentsBox, null), document.getElementById('CommentsBox')));
    console.log(comments);
//    CommentsBox.setState({ data: comments });
});
//React.render(React.createElement(CommentsBox, null), document.getElementById('CommentsBox'));