import React from 'react';

function ListGroup() {
	const items = ['Paris', 'New York', 'Tokyo', 'London', 'Berlin'];

	if (items.length === 0)
		return (
			<>
				{' '}
				<p>No items found</p>;
			</>
		);

	return (
		<>
			<h1 className="text-center">List of Cities</h1>
			<ul className="list-group">
				{items.map((item) => (
					<li
						key={item}
						className="list-group-item"
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
