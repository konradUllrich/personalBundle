import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSORGANIZATIONAttributes {
    LID: number;
    STRSTREET?: string;
    STRPOSTALCODE?: string;
    STRCITY?: string;
    STRPOBOX?: string;
    STRSTATE?: string;
    STRISOCOUNTRYCODE?: string;
    STRCOUNTRY?: string;
}

@Table({
	tableName: "DSORGANIZATION",
	timestamps: false 
})
export class DSORGANIZATION extends Model<DSORGANIZATIONAttributes, DSORGANIZATIONAttributes> implements DSORGANIZATIONAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(96) 
    })
    	STRSTREET?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(10) 
    })
    	STRPOSTALCODE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(96) 
    })
    	STRCITY?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(10) 
    })
    	STRPOBOX?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(32) 
    })
    	STRSTATE?: string;

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

}