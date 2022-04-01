var viz;

var nama = 'Jon-Snow'

function draw() {
	var config = {
		container_id: "viz",
		server_url: "bolt://3.239.241.72:7687",
		server_user: "neo4j",
		server_password: "plate-samples-relays",
		labels: {
			//"Character": "name",
			"Character": {
				"caption": "name",
				"size": "pagerank",
				"community": "community"
				//"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
			}
		},
		relationships: {
			"INTERACTS": {
				"thickness": "weight",
				"caption": false
			}
		},
		initial_cypher: "MATCH p=(:Character {name:'" + nama + "'})-[:INTERACTS]->(:Character) RETURN p"
	};

	viz = new NeoVis.default(config);
	viz.render();
	console.log(viz);

}