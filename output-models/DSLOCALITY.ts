import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSLOCALITYAttributes {
    LID: number;
    STRSTATE?: string;
    STRSTREET?: string;
}

@Table({
	tableName: "DSLOCALITY",
	timestamps: false 
})
export class DSLOCALITY extends Model<DSLOCALITYAttributes, DSLOCALITYAttributes> implements DSLOCALITYAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(32) 
    })
    	STRSTATE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(96) 
    })
    	STRSTREET?: string;

}