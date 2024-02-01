import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PLANNER_OWNERSAttributes {
    DTINSERT?: Date;
    LUSERIDINSERT?: number;
    REF_7B598041?: number;
    FKID?: string;
    LUSERID?: number;
    STRID: string;
    DTEDIT?: Date;
}

@Table({
	tableName: "PLANNER_OWNERS",
	timestamps: false 
})
export class PLANNER_OWNERS extends Model<PLANNER_OWNERSAttributes, PLANNER_OWNERSAttributes> implements PLANNER_OWNERSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_7B598041?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

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

}