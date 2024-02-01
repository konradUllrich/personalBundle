import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CAL_SET_PERSONALAttributes {
    STRID: string;
    DTEDIT?: Date;
    B_EMAIL?: boolean;
    LUSERID?: number;
    DTINSERT?: Date;
    B_SHARE?: boolean;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "CAL_SET_PERSONAL",
	timestamps: false 
})
export class CAL_SET_PERSONAL extends Model<CAL_SET_PERSONALAttributes, CAL_SET_PERSONALAttributes> implements CAL_SET_PERSONALAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_EMAIL?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SHARE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

}