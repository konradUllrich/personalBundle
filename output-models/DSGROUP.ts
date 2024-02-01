import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSGROUPAttributes {
    LID: number;
    STRMAIL?: string;
    LEXTPRIMGRPTKN?: number;
}

@Table({
	tableName: "DSGROUP",
	timestamps: false 
})
export class DSGROUP extends Model<DSGROUPAttributes, DSGROUPAttributes> implements DSGROUPAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(254) 
    })
    	STRMAIL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LEXTPRIMGRPTKN?: number;

}