import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSTENANTAttributes {
    LID: number;
    STRISOCOUNTRYCODE?: string;
    STRCOUNTRY?: string;
    STRPOBOX?: string;
    STRSTATE?: string;
    STRSTREET?: string;
    STRPOSTALCODE?: string;
    STRCITY?: string;
}

@Table({
	tableName: "DSTENANT",
	timestamps: false 
})
export class DSTENANT extends Model<DSTENANTAttributes, DSTENANTAttributes> implements DSTENANTAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

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
    	type: DataType.STRING(32) 
    })
    	STRSTATE?: string;

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

}