import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSORGUNITAttributes {
    LID: number;
    STRCITY?: string;
    STRISOCOUNTRYCODE?: string;
    STRCOUNTRY?: string;
    STRPOBOX?: string;
    STRPOSTALCODE?: string;
    STRSTATE?: string;
    STRSTREET?: string;
}

@Table({
	tableName: "DSORGUNIT",
	timestamps: false 
})
export class DSORGUNIT extends Model<DSORGUNITAttributes, DSORGUNITAttributes> implements DSORGUNITAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(96) 
    })
    	STRCITY?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2) 
    })
    	STRISOCOUNTRYCODE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(32) 
    })
    	STRCOUNTRY?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(10) 
    })
    	STRPOBOX?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(10) 
    })
    	STRPOSTALCODE?: string;

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